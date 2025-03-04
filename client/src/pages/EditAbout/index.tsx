import { useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";

const EditAbout = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // Lấy dữ liệu từ API khi component mount
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/about.php`)
      .then((response) => {
        if (response.data) {
          setContent(response.data.content);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy nội dung About:", error));
  }, []);

  const handleSave = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/about.php`,
        { content }, // Gửi JSON thay vì FormData
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Nội dung đã được cập nhật!");
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  // Cấu hình Jodit Editor
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Nhập nội dung...",
      uploader: { insertImageAsBase64URI: true },
    }),
    []
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chỉnh sửa About</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />
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
