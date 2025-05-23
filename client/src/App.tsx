import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EditAbout from "./pages/EditAbout";
import ManagementPage from "./pages/Management";
import ModulePage from "./pages/Module";
import EditDocs from "./pages/EditDocs";
import DocsPage from "./pages/Docs";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import "./App.css";
import "./i18n";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem("user"));

  // Cập nhật lại auth khi localStorage thay đổi từ tab khác (ít gặp nhưng chuẩn)
  useEffect(() => {
    const syncAuth = () => setIsAuthenticated(!!localStorage.getItem("user"));
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  // Cập nhật lại auth mỗi lần chuyển trang
  const location = useLocation();
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("user"));
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction-detail" element={<About />} />
      <Route path="/edit-introduction" element={<EditAbout />} />
      <Route path="/management-board" element={<ManagementPage />} />
      <Route path="/module/:id" element={<ModulePage />} />
      <Route path="/docs/:type" element={<DocsPage />} />
      <Route path="/time-line" element={<Timeline />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/edit-docs" element={<EditDocs />} />
      <Route path="/admin/login" element={<Login />} />
     <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
}

// 🧠 Bọc App trong Router vì đang dùng useLocation
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
