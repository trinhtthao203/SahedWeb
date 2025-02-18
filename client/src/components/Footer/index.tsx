import React from "react";
import { Facebook, X, Language, Lan } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 px-4 md:px-16 lg:px-28">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className=" text-lg font-bold mb-4 text-white pt-10">SAHED</h2>
          <p className=" text-gray-300 text-justify">
            Website này là một phần của Dự án Tăng cường giáo dục đại học lĩnh
            vực nông nghiệp tại Đại học Quốc gia TP.HCM, hợp tác với KOICA,
            hướng tới phát triển nguồn nhân lực chất lượng cao và ứng dụng công
            nghệ trong sản xuất nông nghiệp bền vững.
          </p>
        </div>
        <div>
          <h2 className=" text-lg font-bold mb-4 text-white pt-10">
            Quick Links
          </h2>
          <ul>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-lg font-bold mb-4 text-white pt-10">
            Follow Us
          </h2>
          <ul className=" flex space-x-4">
            <li>
              <Facebook className=" text-blue-500" />
            </li>
            <li>
              <X className=" text-white" />
            </li>
            <li>
              <Language className=" text-green-500" />
            </li>
          </ul>
        </div>
      </div>
      <div className=" border-t border-gray-600 mt-6 pt-6 p-4 text-gray-300 text-center">
        <p>© 2025 An Giang University</p>
      </div>
    </footer>
  );
};

export default Footer;
