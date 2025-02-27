import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Blogs from "../../components/Blogs";
import Partners from "../../components/Partners";
import About from "../../components/About";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Slider />

      <div id="about" className="pt-[10rem]">
        <About />
      </div>
      <div id="blogs" className="pt-[10rem]">
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
