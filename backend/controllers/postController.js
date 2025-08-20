import Post from "../models/Post.js";
import { slugify } from "../utils/slugify.js";

// Helper to ensure unique slug
const ensureUniqueSlug = async (baseSlug, postIdToExclude = null) => {
  let slug = baseSlug;
  let counter = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const exists = await Post.findOne({
      slug,
      ...(postIdToExclude ? { _id: { $ne: postIdToExclude } } : {}),
    }).lean();
    if (!exists) return slug;
    slug = `${baseSlug}-${counter++}`;
  }
};

// POST /api/posts
export const createPost = async (req, res, next) => {
  try {
    const {
      title,
      excerpt,
      content = [],
      bulletPoints = [],
      categories = [],
      tags = [],
      image = "",
      author = "Admin",
      readTime = "",
      status = "draft",
      publishedAt,
    } = req.body;

    if (!title) {
      res.status(400);
      throw new Error("Title is required");
    }

    const baseSlug = slugify(title);
    const slug = await ensureUniqueSlug(baseSlug);

    const post = await Post.create({
      title,
      slug,
      excerpt,
      content,
      bulletPoints,
      categories,
      tags,
      image,
      author,
      readTime,
      status,
      publishedAt: status === "published" ? publishedAt || new Date() : null,
    });

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// GET /api/posts
// Query: page, limit, q (search), status, category, tag, sort
export const listPosts = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const skip = (page - 1) * limit;

    const { q, status, category, tag, sort = "-publishedAt,-createdAt" } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (category) filter.categories = category;
    if (tag) filter.tags = tag;
    if (q) filter.$text = { $search: q };

    const [items, total] = await Promise.all([
      Post.find(filter)
        .sort(sort.split(",").join(" "))
        .skip(skip)
        .limit(limit)
        .lean(),
      Post.countDocuments(filter),
    ]);

    res.json({
      items,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/posts/:slug
export const getPostBySlug = async (req, res, next) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).lean();
    if (!post) {
      res.status(404);
      throw new Error("Post not found");
    }
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// PATCH /api/posts/:id
export const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await Post.findById(id);
    if (!existing) {
      res.status(404);
      throw new Error("Post not found");
    }

    const updatable = [
      "title",
      "excerpt",
      "content",
      "bulletPoints",
      "categories",
      "tags",
      "image",
      "author",
      "readTime",
      "status",
      "publishedAt",
    ];

    updatable.forEach((key) => {
      if (key in req.body) existing[key] = req.body[key];
    });

    // If title changed, regenerate unique slug
    if ("title" in req.body && req.body.title) {
      const baseSlug = slugify(req.body.title);
      existing.slug = await ensureUniqueSlug(baseSlug, id);
    }

    // Auto set/unset publishedAt based on status
    if ("status" in req.body) {
      if (existing.status === "published" && !existing.publishedAt) {
        existing.publishedAt = new Date();
      }
      if (existing.status === "draft") {
        existing.publishedAt = null;
      }
    }

    const updated = await existing.save();
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/posts/:id
export const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404);
      throw new Error("Post not found");
    }
    res.json({ message: "Post deleted", id });
  } catch (err) {
    next(err);
  }
};
