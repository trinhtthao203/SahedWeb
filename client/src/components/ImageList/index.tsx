import React, { useState } from "react";
import { Gallery, Image as GalleryImage } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
// Kiểu tag (nếu cần hỗ trợ tag)
interface Tag {
    title: string;
}

// Kiểu dữ liệu hình ảnh truyền vào props
interface ImageData {
    src: string;         // ảnh dùng cho gallery thumbnail
    original: string;    // ảnh gốc cho lightbox
    caption?: string;
    title?: string;
    description?: string;
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

    const handleClick = (index: number) => setIndex(index);

    const images: GalleryImage[] = data.map((image) => ({
        ...image,
        thumbnail: image.src,
        src: image.src,
        width: 3.5,
        height: 2,
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

    const slides = data.map(({ original, caption }) => ({
        src: original,
        width: "100%",
        height: "100%",
        title: caption ?? "",
    }));

    return (
        <div className="md:px-[14rem] py-[2rem]">
            <p className="text-[1.3rem] font-medium uppercase text-darkblue">
                {t(`${title}`)}
            </p>
            <div>
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                    imageRenderer={(image) => (
                        <img
                            src={image.src}
                            alt={image.caption || ""}
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    )}
                />
                <Lightbox
                    slides={slides}
                    plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </div>
    );
};

export default ImageList;
