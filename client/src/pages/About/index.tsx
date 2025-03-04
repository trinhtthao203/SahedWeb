import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/about.php`).then((response) => {
      if (response.data) {
        setContent(response.data.content);
      }
    });
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
