import Heading from "../Heading";
import CustomButton from "../CustomButton";

const About = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <Heading title="SAHED" />
        <p className="text-xl text-justify px-10">
          Dự án nhằm nâng cao chất lượng giáo dục trong lĩnh vực nông nghiệp tại
          Trường Đại học An Giang (ĐHAG), Đại học Quốc gia TP.HCM (ĐHQG-HCM).
          Mục tiêu cụ thể bao gồm phát triển đội ngũ nhân lực trình độ tiến sĩ,
          cải tiến chương trình đào tạo, nâng cao năng lực quản lý và tăng cường
          hợp tác giữa nhà trường và doanh nghiệp​.
        </p>
        <div className="flex justify-center mt-4">
          <CustomButton title="read_more" navigateTo="/about-detail" />
        </div>
      </div>
    </div>
  );
};

export default About;
