import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "Introduction",
        manager:"Management Board",
        manager_title_page:"SAHED Project Management Board “Strengthening Agricultural Higher Education of VNUHCM”",
        manager_title_description:"The SAHED Project Management Board was established under Decision No. 1610/QĐ-ĐHAG, dated September 5, 2022, by the President of An Giang University.",
        position:"Position",
        roles:"Roles",
        partners: "Partners",
        news: "News & Events",
        fullname:"Fullname",
        contact: "Contact",
        module: "Components",
        module_one: "Components I",
        module_two: "Components II",
        module_three: "Components III",
        module_four: "Components IV",
        welcome: "Welcome to SAHED Project",
        read_more: "Read More",
        search:"Search",
        footer_description:"The website is part of the Higher Education Enhancement Project in Agriculture at VNU-HCM, in collaboration with KOICA, aiming to develop high-quality human resources and promote technology application in sustainable agricultural production."
      },
    },
    vi: {
      translation: {
        home: "Trang chủ",
        about: "Giới thiệu",
        manager:"Ban quản lý dự án",
        manager_title_page:"Ban Quản lý dự án “Tăng cường giáo dục đại học lĩnh vực nông nghiệp tại Đại học Quốc gia Thành phố Hồ Chí Minh” (Dự án SAHED)",
        manager_title_description:"Ban Quản lý dự án được thành lập theo Quyết định số 1610/QĐ-ĐHAG ngày 05/9/2022 của Hiệu trưởng Trường Đại học An Giang",
        fullname:"Họ và tên",
        position:"Chức vụ",
        roles:"Vai trò",
        partners: "Đối tác",
        news: "Tin tức & Sự kiện",
        contact: "Liên hệ",
        module: "Hợp phần",
        module_one: "Hợp phần I",
        module_two: "Hợp phần II",
        module_three: "Hợp phần III",
        module_four: "Hợp phần IV",
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
