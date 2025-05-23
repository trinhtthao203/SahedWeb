import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import ImageList from "../../components/ImageList";
import { useTranslation } from "react-i18next";

interface ImageItem {
  url: string;
  description: {
    vi?: { title?: string };
    en?: { title?: string };
  };
}

const GalleryPage = () => {
  const { i18n } = useTranslation();
  const [rawImages1, setRawImages1] = useState<ImageItem[]>([]);
  const [rawImages2, setRawImages2] = useState<ImageItem[]>([]);

  const fetchImages = async (order: number, setter: (data: ImageItem[]) => void) => {
    const formData = new FormData();
    formData.append("category", "components");
    formData.append("order", order.toString());

    try {
      const response = await fetch("http://sahed.agu.edu.vn/api/images-component.php", {
        method: "POST",
        body: formData,
      });

      const data: ImageItem[] = await response.json();
      setter(data);
    } catch (error) {
      console.error("Lỗi khi tải hình ảnh:", error);
    }
  };

  useEffect(() => {
    fetchImages(1, setRawImages1);
    fetchImages(2, setRawImages2);
  }, []);

  // Re-map dữ liệu mỗi khi ngôn ngữ đổi
  const formatImages = (data: ImageItem[]) => {
    return data.map((item) => ({
      src: item.url,
      original: item.url,
      caption: item.description?.[i18n.language as "vi" | "en"]?.title || "",
      tags: [],
    }));
  };

  const imagesOrder1 = formatImages(rawImages1);
  const imagesOrder2 = formatImages(rawImages2);

  return (
    <div>
      <Navbar />
      <Heading title="gallery" />
      <ImageList title="module_one" data={imagesOrder1} />
      <ImageList title="module_two" data={imagesOrder2} />
      <Footer />
    </div>
  );
};

export default GalleryPage;
