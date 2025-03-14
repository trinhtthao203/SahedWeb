import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ModulePage = () => {
  const { id } = useParams(); // Lấy module ID từ URL

  return (
    <div>
      <Navbar />
      <div className="mt-[10rem]"></div>
      <p>Module: {id}</p>
      <Footer />
    </div>
  );
};

export default ModulePage;
