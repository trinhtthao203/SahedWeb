import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EditAbout from "./pages/EditAbout";
import ManagementPage from "./pages/Management";
import "./App.css";
import "./i18n";
import ModulePage from "./pages/Module";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction-detail" element={<About />} />
        <Route path="/edit-introduction" element={<EditAbout />} />
        <Route path="/management-board" element={<ManagementPage />} />
        <Route path="/module/:id" element={<ModulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
