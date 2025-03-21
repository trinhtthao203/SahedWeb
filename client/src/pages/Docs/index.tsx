import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DocsPage = () => {
  const { type } = useParams<{ type: string }>(); // Lấy type từ URL
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "vi"; // Mặc định là "vi"
  });

  // Lấy dữ liệu dựa trên type và language
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/docs.php?type=${type}&lang=${language}`
      )
      .then((response) => {
        if (response.data) {
          setContent(response.data.content);

          // Kiểm tra và xóa dữ liệu nếu quá lớn
          try {
            localStorage.setItem(
              `docsContent_${type}_${language}`,
              response.data.content
            );
          } catch (e) {
            console.warn("LocalStorage đầy, xóa dữ liệu cũ...");
            localStorage.clear(); // Xóa hết nếu bị đầy
            localStorage.setItem(
              `docsContent_${type}_${language}`,
              response.data.content
            );
          }
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu Docs:", error));
  }, [type, language]);

  // Lắng nghe sự thay đổi ngôn ngữ từ LocalStorage (trường hợp đổi từ Navbar)
  useEffect(() => {
    const handleStorageChange = () => {
      const newLang = localStorage.getItem("language") || "vi";
      setLanguage(newLang);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container px-[1rem] sm:px-[2rem] lg:px-[10rem] mx-auto p-4 mt-9">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DocsPage;
