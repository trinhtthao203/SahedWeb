import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Blogs from "../../components/Blogs";

function Home() {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Slider />
      <Blogs />
      <p className=" text-yellow-700">HLEWIN</p>
      <Footer />
    </div>
  );
}

export default Home;
