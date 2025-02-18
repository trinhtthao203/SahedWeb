import { Button } from "@mui/material";

const Cards = ({ id, image, title, shortContent, link }: any) => {
  console.log(image);
  return (
    <div className="mb-10 px-10">
      <div className="group" key={id}>
        <div className="relative">
          <img
            src={image} // Sử dụng URL đã chỉnh sửa
            alt={title}
            className="w-full sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-md"
          />
          {/* Hover button */}
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
            <Button variant="contained" color="primary">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Đọc thêm
              </a>
            </Button>
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold pt-5 text-center">{title}</h2>
          <h2 className="font-bold text-gray-600">{shortContent}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
