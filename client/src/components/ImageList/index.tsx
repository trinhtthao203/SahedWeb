import React, { useState } from "react";
import { Gallery, Image as GalleryImage } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";

// Kiểu tag (nếu cần hỗ trợ tag)
interface Tag {
    title: string;
}

// Kiểu dữ liệu hình ảnh truyền vào props
interface ImageData {
    src: string;
    original: string;
    caption?: string;
    tags?: Tag[];
}

// Kiểu cho props component
interface ImageListProps {
    title: string;
    data: ImageData[];
}

const ImageList: React.FC<ImageListProps> = ({ title, data }) => {
    const { t } = useTranslation();

    const [index, setIndex] = useState<number>(-1);

    const handleClick = (index: number) => {
        setIndex(index);
    };

    // Chuẩn bị dữ liệu cho Gallery
    const images: GalleryImage[] = data.map((image) => ({
    ...image,
    thumbnail: image.src,
    src: image.src,
    width: 800, // hoặc giá trị thực tế nếu có
    height: 600,
    customOverlay: image.caption && (
        <div className="bg-black max-h-[240px] overflow-hidden absolute bottom-0 w-full text-white p-1 text-[90%]">
            <div>{t(image.caption)}</div>
            {image.tags?.map((tag, index) => (
                <div
                    key={index}
                    className="break-words inline-block bg-white h-auto text-[75%] font-semibold leading-none p-10 rounded-[10px] text-black align-baseline m-[2px]"
                >
                    {tag.title}
                </div>
            ))}
        </div>
    ),
}));


    // Dữ liệu cho Lightbox
const slides = data.map(({ original }) => ({
    src: original,
    width: 1200, // số thực, ví dụ 1200px
    height: 800, // số thực, ví dụ 800px
}));

    return (
        <div className="md:px-[14rem] py-[2rem]">
            <p className="text-[1.3rem] font-medium uppercase text-darkblue">
                {title}
            </p>
            <div>
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                />
                <Lightbox
                    slides={slides}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </div>
    );
};

export default ImageList;
