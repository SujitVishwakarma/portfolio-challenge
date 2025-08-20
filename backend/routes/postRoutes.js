import express from "express";
import {
  createPost,
  listPosts,
  getPostBySlug,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

router.route("/")
  .post(createPost)
  .get(listPosts);

router.route("/:slug")
  .get(getPostBySlug);

router.route("/:id")
  .patch(updatePost)
  .delete(deletePost);

export default router;
