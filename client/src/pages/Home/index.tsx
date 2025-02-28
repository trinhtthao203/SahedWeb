import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Blogs from "../../components/Blogs";
import Partners from "../../components/Partners";
import About from "../../components/About";

const Home: React.FC = () => {
  const location = useLocation(); // Lấy URL hiện tại

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-gray-200">
      <Navbar />
      <Slider />
      <div id="about" className="pt-[10rem]">
        <About />
      </div>
      <div id="news" className="pt-[10rem]">
        <Blogs />
      </div>
      <div id="partners" className="pt-[10rem]">
        <Partners />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
