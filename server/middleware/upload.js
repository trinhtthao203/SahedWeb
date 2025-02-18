const multer = require("multer");
const path = require("path");

// Cấu hình multer để lưu ảnh vào thư mục uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Thư mục lưu ảnh
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file là timestamp + phần mở rộng
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
