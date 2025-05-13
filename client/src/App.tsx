import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EditAbout from "./pages/EditAbout";
import ManagementPage from "./pages/Management";
import "./App.css";
import "./i18n";
import ModulePage from "./pages/Module";
import EditDocs from "./pages/EditDocs";
import DocsPage from "./pages/Docs";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import AdminPage from "./pages/Admin";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
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
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/home" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
