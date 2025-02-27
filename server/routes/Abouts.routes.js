const express = require("express");
const router = express.Router();
const { About } = require("../models");

// Lấy nội dung About
router.get("/", async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    console.error("Lỗi khi lấy About:", error);
    res.status(500).json({ error: "Lỗi server khi lấy dữ liệu About" });
  }
});

// Cập nhật nội dung About
router.post("/", async (req, res) => {
  try {
    const { content } = req.body;
    let about = await About.findOne();

    if (about) {
      await about.update({ content });
    } else {
      about = await About.create({ content });
    }

    res.json({ message: "Nội dung About đã được cập nhật!" });
  } catch (error) {
    console.error("Lỗi khi cập nhật About:", error);
    res.status(500).json({ error: "Lỗi server khi cập nhật About" });
  }
});

module.exports = router;
