import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import IMG01 from "/images/banner/1.jpg";
import IMG02 from "/images/banner/3. Quý thầy cô đoàn công tác của ĐHQG-HCM, Trường ĐHAG cùng lãnh đạo Trường Nông nghiệp và Khoa học đời sống (CALS) .jpg";
import IMG03 from "/images/banner/6a.jpg";
import IMG04 from "/images/banner/12.jpg";
import IMG05 from "/images/banner/Đoàn tham quan Busan (4).jpg";
import IMG06 from "/images/banner/Đoàn thực tế chụp ảnh lưu niệm tại SNU.jpg";
import IMG07 from "/images/banner/GS Choi Soo Jung - Phó Giám đốc Dự án SAHED trao giấy chứng nhận cho các sinh viên tham gia chuyến học tập tại Hàn Quốc (2).jpg";
import IMG08 from "/images/banner/IMG_1246.jpg";
import IMG09 from "/images/banner/PGS.TS Võ Văn Thắng - Hiệu trưởng Trường Đại học An Giang tặng quà lưu niệm cho GS Choi Soo Jung - Phó Giám đốc Dự án SAHED.jpg";

const Slider = () => {
  const images = [
    IMG01,
    IMG02,
    IMG03,
    IMG04,
    IMG05,
    IMG06,
    IMG07,
    IMG08,
    IMG09,
  ];

  return (
    <div>
      <Fade autoplay>
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full sm:h-[60vh] md:h-[70vh] lg:h-[75vh] flex items-center justify-center"
          >
            <img src={img} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;
