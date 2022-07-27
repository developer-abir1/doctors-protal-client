
import { Routes, Route, Link } from "react-router-dom";
import AboutHome from "./app/pages/about/aboutHome/AboutHome";
import Home from "./app/pages/Home/Home/Home";
import './App.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutHome />} />
    </Routes>
  );
}

export default App;
