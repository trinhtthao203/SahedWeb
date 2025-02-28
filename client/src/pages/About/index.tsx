import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/about").then((response) => {
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
