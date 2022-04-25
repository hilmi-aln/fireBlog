import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Register from "../pages/register/Register.jsx";
import NewBlog from "../pages/newBlog/NewBlog";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />        
        <Route path="/new" element={<NewBlog/>} />        
      </Routes>
    </Router>
  );
};

export default AppRouter;
