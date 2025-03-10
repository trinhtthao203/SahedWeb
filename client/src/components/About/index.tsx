import Heading from "../Heading";
import CustomButton from "../CustomButton";

const About = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <Heading title="SAHED" />
        <p className="text-xl text-justify px-10">
          Dự án SAHED (Strengthening Agricultural Higher Education of VNU-HCM in
          Vietnam Project) là dự án "Tăng cường giáo dục đại học lĩnh vực nông
          nghiệp tại Đại học Quốc gia Thành phố Hồ Chí Minh, Việt Nam" do Cơ
          quan Hợp tác Quốc tế Hàn Quốc (KOICA) tài trợ.
        </p>
        <div className="flex justify-center mt-4">
          <CustomButton title="read_more" navigateTo="/about-detail" />
        </div>
      </div>
    </div>
  );
};

export default About;
