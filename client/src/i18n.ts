import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        partners: "Partners",
        news: "News & Events",
        contact: "Contact",
        welcome: "Welcome to SAHED Project",
        read_more: "Read More",
        search:"Search"
      },
    },
    vi: {
      translation: {
        home: "Trang chủ",
        about: "Giới thiệu",
        partners: "Đối tác",
        news: "Tin tức & Sự kiện",
        contact: "Liên hệ",
        welcome: "Chào mừng đến với dự án SAHED",
        read_more: "Đọc thêm",
        search:"Tìm kiếm"
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
