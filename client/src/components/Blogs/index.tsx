import Slider from "react-slick";
import Heading from "../Heading";
import Cards from "../Cards";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState<any[]>([]); // Dữ liệu bài viết
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading

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

  // Lấy dữ liệu từ API khi component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts"); // Đảm bảo URL chính xác
        setPosts(response.data); // Lưu dữ liệu vào state
        setLoading(false); // Tắt loading khi nhận được dữ liệu
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu: ", error);
        setLoading(false);
      }
    };

    fetchPosts(); // Gọi hàm lấy dữ liệu
  }, []); // Chạy một lần khi component mount

  return (
    <div className="flex justify-center items-center overflow-hidden w-full">
      <div className="container">
        <Heading title="Tin tức & Sự kiện" />
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.id}>
              <Cards
                title={post.title}
                image={
                  post.image
                    ? `http://localhost:4000/${post.image.replace("\\", "/")}`
                    : "/path/to/default-image.jpg"
                }
                link={post.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
