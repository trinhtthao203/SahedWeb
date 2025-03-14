import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        manager:"Manager",
        partners: "Partners",
        news: "News & Events",
        contact: "Contact",
        document: "Research document",
        module: "Module",
        module_one: "Module One",
        module_two: "Module Two",
        module_three: "Module Three",
        module_four: "Module Four",
        welcome: "Welcome to SAHED Project",
        read_more: "Read More",
        search:"Search",
        footer_description:"This website is part of the Project for Enhancing Higher Education in Agriculture at Vietnam National University, Ho Chi Minh City, in collaboration with KOICA, aiming to develop high-quality human resources and apply technology in sustainable agricultural production."
      },
    },
    vi: {
      translation: {
        home: "Trang chủ",
        about: "Giới thiệu",
        manager:"Ban quản lý dự án",
        partners: "Đối tác",
        news: "Tin tức & Sự kiện",
        contact: "Liên hệ",
        document: "Tài liệu nghiên cứu",
        module: "Hợp phần",
        module_one: "Hợp phần Một",
        module_two: "Hợp phần Hai",
        module_three: "Hợp phần Ba",
        module_four: "Hợp phần Bốn",
        welcome: "Chào mừng đến với dự án SAHED",
        read_more: "Đọc thêm",
        search:"Tìm kiếm",
        footer_description:"Website này là một phần của Dự án Tăng cường giáo dục đại học lĩnh vực nông nghiệp tại Đại học Quốc gia TP.HCM, hợp tác với KOICA, hướng tới phát triển nguồn nhân lực chất lượng cao và ứng dụng công nghệ trong sản xuất nông nghiệp bền vững"

      },
    },
  },
  lng: "vi", // Ngôn ngữ mặc định
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
