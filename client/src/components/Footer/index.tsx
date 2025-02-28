import React from "react";
import { Facebook, X, Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" bg-gray-800 px-4 md:px-16 lg:px-28">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className=" text-lg font-bold mb-4 text-white pt-10">SAHED</h2>
          <p className=" text-gray-300 text-justify">
            {t("footer_description")}
          </p>
        </div>
        <div>
          <h2 className=" text-lg font-bold mb-4 text-white pt-10">
            Quick Links
          </h2>
          <ul>
            <li>
              <a href="/#about" className="hover:underline text-gray-300">
                {t("about")}
              </a>
            </li>
            <li>
              <a href="/#news" className="hover:underline text-gray-300">
                {t("news")}
              </a>
            </li>
            <li>
              <a href="/#partners" className="hover:underline text-gray-300">
                {t("partners")}
              </a>
            </li>
            <li>
              <a href="/#footer" className="hover:underline text-gray-300">
                {t("contact")}
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
