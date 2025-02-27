import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";

// Đăng ký module chỉnh kích thước ảnh
Quill.register("modules/imageResize", ImageResize);

const EditAbout = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/about").then((response) => {
      if (response.data) {
        setContent(response.data.content);
      }
    });
  }, []);

  const handleSave = async () => {
    await axios.post("http://localhost:4000/about", { content });
    alert("Nội dung đã được cập nhật!");
  };

  // Cấu hình các module cho React-Quill
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"], // Thêm nút chèn ảnh
      [{ align: [] }], // Thêm nút căn giữa ảnh
      ["clean"],
    ],
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chỉnh sửa About</h2>
      <ReactQuill value={content} onChange={setContent} modules={modules} />
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Lưu
      </button>
    </div>
  );
};

export default EditAbout;
