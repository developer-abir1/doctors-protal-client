
import { Routes, Route, Link } from "react-router-dom";
import Home from "./app/pages/Home/Home/Home";
import './App.css'
import Appoinmnet from "./app/pages/appoinment/Appoinment/Appoinmnet";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appoinment" element={<Appoinmnet />} />
    </Routes>
  );
}

export default App;
