const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const upload = require("../middleware/upload");
// Lấy danh sách các bài viết
router.get("/", async (req, res) => {
  try {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách bài viết", error });
  }
});

// POST để tạo bài viết với ảnh
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, shortContent, link } = req.body;
    const image = req.file ? req.file.path : null; // Lấy đường dẫn ảnh từ file

    if (!title || !shortContent || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Tạo bài viết mới
    const post = await Posts.create({
      title,
      shortContent,
      image,
      link,
    });

    res.status(201).json(post); // Trả về bài viết mới tạo
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi tạo bài viết", error });
  }
});

module.exports = router;
