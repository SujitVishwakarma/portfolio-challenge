import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 180 },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, trim: true, maxlength: 300 },
    content: { type: [String], default: [] }, 
    bulletPoints: { type: [String], default: [] },
    categories: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    image: { type: String, default: "" }, 
    author: { type: String, default: "Admin" },
    readTime: { type: String, default: "" }, 
    commentsCount: { type: Number, default: 0 },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

// Create a text index for search
PostSchema.index({
  title: "text",
  excerpt: "text",
  tags: "text",
  categories: "text",
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
