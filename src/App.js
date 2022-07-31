
import { Routes, Route } from "react-router-dom";
import Home from "./app/pages/Home/Home/Home";
import './App.css'
import Appoinmnet from "./app/pages/appoinment/Appoinment/Appoinmnet";
import Login from "./app/pages/login/login/Login";
import Singup from "./app/pages/login/singup/Singup";
import RequerAuth from "./app/pages/RequreAuth/RequerAuth";




function App() {



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="appoinment" element={
        <RequerAuth>
          <Appoinmnet />
        </RequerAuth>
      } />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<Singup />} />
    </Routes>
  );
}

export default App;
