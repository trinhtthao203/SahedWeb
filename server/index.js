require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(express.json({ limit: "50mb" })); // Tăng giới hạn payload
app.use(cors());

const db = require("./models");
const PORT = process.env.PORT || 4000;

// Cấu hình phục vụ tệp tĩnh từ thư mục 'uploads'
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routers
const postRouter = require("./routes/Posts.routes");
app.use("/posts", postRouter);

const aboutRouter = require("./routes/Abouts.routes");
app.use("/about", aboutRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
});
