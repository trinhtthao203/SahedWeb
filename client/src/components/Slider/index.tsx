import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import IMG01 from "/images/Tập huấn Nông nghiệp công nghệ số và thảo luận hỗ trợ cơ sở vật chất theo Dự án SAHED.jpg";
import IMG02 from "/images/Thảo luận phát triển chương trình đào tạo thuộc Hợp phần 2, Dự án SAHED (KOICA tài trợ).jpg";
import IMG03 from "/images/Tập huấn nâng cao năng lực cho nhân viên hành chính trong khuôn khổ Dự án SAHED.jpg";

const Slider = () => {
  const images = [IMG01, IMG02, IMG03];

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
