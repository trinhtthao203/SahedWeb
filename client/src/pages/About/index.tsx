import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutPage = () => {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "vi"; // Lấy ngôn ngữ từ LocalStorage, mặc định là "vi"
  });

  // Lấy dữ liệu khi ngôn ngữ thay đổi
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/about.php?lang=${language}`)
      .then((response) => {
        if (response.data) {
          setContent(response.data.content);
          localStorage.setItem("aboutContent", response.data.content); // Lưu vào LocalStorage
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu About:", error);
      });
  }, [language]); // Gọi API mỗi khi ngôn ngữ thay đổi

  // Nghe sự thay đổi ngôn ngữ từ LocalStorage (trường hợp ngôn ngữ đổi từ Navbar)
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
      <div className="container mx-auto p-4 mt-24">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
