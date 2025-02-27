import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EditAbout from "./pages/EditAbout";
import "./App.css";
import "./i18n";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-detail" element={<About />} />
        <Route path="/edit-about" element={<EditAbout />} />
      </Routes>
    </Router>
  );
}

export default App;
