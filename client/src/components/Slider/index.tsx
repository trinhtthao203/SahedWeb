import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";

const Slider = () => {
  const [images, setImages] = useState<{ url: string }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/images.php?category=banner`
        );
        if (Array.isArray(response.data)) {
          setImages(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (error) {
        console.error("Lỗi khi tải ảnh:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div>
        <p>SAHED</p>
      </div>
      <Fade autoplay>
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full sm:h-[60vh] md:h-[70vh] lg:h-[75vh] flex items-center justify-center"
          >
            <img
              src={img.url}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;
