import Lottie from "lottie-react"; // Dùng lottie-react thay vì react-lottie
import loadingData from "../../assets/loading.json";
import Logo25 from "../../assets/logo-agu.png";

function LoadingScreen() {
  return (
    <div className="h-screen w-full flex justify-center items-center relative bg-green01">
      <Lottie
        animationData={loadingData}
        loop={true}
        className="w-[300px] h-[300px]"
      />
      <img
        src={Logo25}
        className="w-[8rem] animate-fade-up absolute text-7xl font-meri bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text"
        alt="Logo"
      />
    </div>
  );
}

export default LoadingScreen;
