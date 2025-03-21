import { useEffect, useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";

const EditDocs = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "vi"
  );
  const [type, setType] = useState("about"); // Mặc định là "about"
  const [types, setTypes] = useState<string[]>([]); // Danh sách các loại tài liệu

  // Lấy danh sách types từ API
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/docs-types.php`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTypes(response.data);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy danh sách types:", error));
  }, []);

  // Lấy nội dung khi type hoặc language thay đổi
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/docs.php?type=${type}&lang=${language}`
      )
      .then((response) => {
        if (response.data) {
          setContent(response.data.content);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, [type, language]);

  const handleSave = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/docs.php`,
        { content, lang: language, type },
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Nội dung đã được cập nhật!");
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

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
      <h2 className="text-2xl font-bold mb-4">Chỉnh sửa tài liệu</h2>

      {/* Chọn Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        {types.length > 0 ? (
          types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))
        ) : (
          <option>Đang tải...</option>
        )}
      </select>

      {/* Chọn Ngôn ngữ */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="ml-4 mb-4 p-2 border rounded"
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>

      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={setContent}
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

export default EditDocs;
