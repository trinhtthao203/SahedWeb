import { useEffect, useState } from "react";
import Slider from "react-slick";

import JoditEditor from "jodit-react";
import Heading from "../Heading";
import { useTranslation } from "react-i18next";
import Cards from "../Cards";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = () => {
  const [posts, setPosts] = useState<any[]>([]); // State lưu danh sách bài viết
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language; // Lấy ngôn ngữ từ i18n

  // Cấu hình carousel
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

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts.php?lang=${lang}`
        );
        console.log(response);
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          setPosts([]);
          console.error("Dữ liệu từ API không hợp lệ:", response.data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [lang]); // Gọi lại khi ngôn ngữ thay đổi

  return (
    <div className="flex justify-center items-center overflow-hidden w-full">
      <div className="container">
        <Heading title="news" />
        {loading ? (
          <p className="text-center">Đang tải dữ liệu...</p>
        ) : posts.length > 0 ? (
          <Slider {...settings}>
            {posts.map((post) => (
              <div key={post.id}>
                <Cards
                  title={post.title}
                  image={post.image || "/path/to/default-image.jpg"}
                  link={post.link || "#"}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center">Không có bài viết nào.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
