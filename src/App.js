
import { Routes, Route } from "react-router-dom";
import Home from "./app/pages/Home/Home/Home";
import './App.css'
import Appoinmnet from "./app/pages/appoinment/Appoinment/Appoinmnet";
import Login from "./app/pages/login/login/Login";
import RequerAuth from "./app/pages/RequreAuth/RequerAuth";
import Dashboard from "./app/pages/dashboard/dashboard/Dashboard";
import DashboardHome from "./app/pages/dashboard/dashboardHome/DashboardHome";
import Review from "./app/pages/dashboard/review/Review";
import Mybooking from "./app/pages/dashboard/mybooking/Mybooking";
import SingUp from "./app/pages/login/singup/Singup";
import Users from "./app/pages/dashboard/Users/Users";

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
      <Route path="singup" element={<SingUp />} />

      <Route path="dashboard" element={<RequerAuth> <Dashboard /> </RequerAuth>} >


        <Route index element={<DashboardHome />} />
        <Route path="review" element={<Review />} />
        <Route path="users" element={<Users />} />
        <Route path="mybooking" element={<Mybooking />} />
      </Route>




    </Routes>
  );
}

export default App;
