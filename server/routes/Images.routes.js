const express = require("express");
const router = express.Router();
const { Images } = require("../models"); // Models cho bảng Images
const upload = require("../middleware/upload");

// Lấy danh sách ảnh từ cơ sở dữ liệu
router.get("/", async (req, res) => {
  try {
    const listOfImages = await Images.findAll(); // Lấy ảnh từ bảng Images
    res.json(listOfImages); // Trả về danh sách ảnh
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách ảnh", error });
  }
});

// Route upload ảnh
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { category, order } = req.body;
    const url = req.file ? req.file.path : null; // Lấy đường dẫn ảnh từ file

    // Kiểm tra các trường dữ liệu
    if (!category || !order || !url) {
      return res
        .status(400)
        .json({ message: "Tất cả các trường đều phải được điền" });
    }

    // Lưu thông tin ảnh vào cơ sở dữ liệu
    const image = await Images.create({
      category,
      order,
      url,
    });

    res.status(201).json(image); // Trả về ảnh đã tạo
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi tải ảnh lên", error });
  }
});

module.exports = router;
