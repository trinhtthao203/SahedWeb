import Slider from "react-slick";
import Heading from "../Heading";
import Cards from "../Cards";
import IMG01 from "/images/Phiên thảo luận phát triển chương trình đào tạo thuộc Hợp phần 2, Dự án SAHED (KOICA tài trợ).jpg";
import IMG02 from "/images/Tập huấn Nông nghiệp công nghệ số và thảo luận hỗ trợ cơ sở vật chất theo Dự án SAHED.jpg";
import IMG03 from "/images/Thảo luận phát triển chương trình đào tạo thuộc Hợp phần 2, Dự án SAHED (KOICA tài trợ).jpg";
import IMG04 from "/images/Tập huấn nâng cao năng lực cho nhân viên hành chính trong khuôn khổ Dự án SAHED.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const postData = [
  {
    id: 1,
    title:
      "TẬP HUẤN NÔNG NGHIỆP CÔNG NGHỆ SỐ VÀ THẢO LUẬN HỖ TRỢ CƠ SỞ VẬT CHẤT THEO DỰ ÁN SAHED",
    images: IMG01,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
  {
    id: 2,
    title: "HLEWINFIRSTSTAND2025",
    images: IMG02,
    shortContent: "Lorem ipsum",
  },
  {
    id: 3,
    title: "HLEWINLCK2025",
    images: IMG03,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
  {
    id: 4,
    title: "HLEWINMSI2025",
    images: IMG04,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
  {
    id: 5,
    title: "HLEWINWORLDS2025",
    images: IMG01,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
  {
    id: 6,
    title: "HLEWINWORLDS2025",
    images: IMG02,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
  {
    id: 7,
    title: "HLEWINWORLDS2025",
    images: IMG03,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
  {
    id: 8,
    title: "HLEWINWORLDS2025",
    images: IMG04,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
  {
    id: 9,
    title: "HLEWINWORLDS2025",
    images: IMG01,
    shortContent: "Lorem ipsum",
    link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/tap-huan-nong-nghiep-cong-nghe-so-va-thao-luan-ho-tro-co-so-vat-chat-theo-du-an-sahed",
  },
];

const Blogs = () => {
  const settings = {
    dots: true, // Hiển thị chấm trượt
    infinite: true, // Lặp lại slide
    speed: 500, // Tốc độ chuyển slide (ms)
    slidesToShow: 3, // Mặc định hiển thị 3 card
    slidesToScroll: 3, // Cuộn 3 card mỗi lần
    draggable: true, // Cho phép kéo bằng chuột
    swipe: true, // Hỗ trợ cảm ứng
    responsive: [
      {
        breakpoint: 1024, // Khi màn hình dưới 1024px
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640, // Khi màn hình dưới 640px
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <Heading title="Tin tức" />
        <Slider {...settings}>
          {postData.map((post) => (
            <div key={post.id}>
              <Cards title={post.title} images={post.images} link={post.link} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
