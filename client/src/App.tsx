import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EditAbout from "./pages/EditAbout";
import ManagementPage from "./pages/Management";
import "./App.css";
import "./i18n";
import ModulePage from "./pages/Module";
import DocumentPage from "./pages/Document";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-detail" element={<About />} />
        <Route path="/edit-about" element={<EditAbout />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/module/:id" element={<ModulePage />} />
        <Route path="/document" element={<DocumentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
