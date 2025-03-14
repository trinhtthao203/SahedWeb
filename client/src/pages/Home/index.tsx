import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Blogs from "../../components/Blogs";
import Partners from "../../components/Partners";
import LoadingScreen from "../Loading";

const Home: React.FC = () => {
  const location = useLocation(); // Lấy URL hiện tại
  const [loading, setLoading] = useState(true);
  const visited = sessionStorage.getItem("visited");
  const isVisited = visited ? JSON.parse(visited) : true;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    const timeout = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("visited", JSON.stringify(false));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && isVisited !== false ? (
        <LoadingScreen />
      ) : (
        <div className="bg-gray-200">
          <Navbar />
          <Slider />
          {/* <div id="about" className="pt-[10rem]">
            <About />
          </div> */}
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
      )}
    </>
  );
};

export default Home;
