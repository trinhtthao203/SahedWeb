import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutPage = () => {
  const [content, setContent] = useState(() => {
    return localStorage.getItem("aboutContent") || ""; // Lấy dữ liệu từ LocalStorage nếu có
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/about.php`)
      .then((response) => {
        if (response.data) {
          setContent(response.data.content);
          localStorage.setItem("aboutContent", response.data.content); // Lưu vào LocalStorage
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu About:", error);
      });
  }, []); // Chạy một lần khi component mount

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
