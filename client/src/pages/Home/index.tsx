import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Blogs from "../../components/Blogs";
import Partners from "../../components/Partners";

function Home() {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Slider />
      <div className=" pt-[10rem]">
        <Partners />
      </div>
      <div className=" pt-[10rem]">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
