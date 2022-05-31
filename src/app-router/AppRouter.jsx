import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Register from "../pages/register/Register.jsx";
import NewBlog from "../pages/newBlog/NewBlog";
import Details from "../pages/details/Details";
import UpdateBlog from "../pages/updateBlog/UpdateBlog";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />        
        <Route path="/new" element={<NewBlog/>} />        
        <Route path="/details/:id" element={<Details/>} />        
        <Route path="/updateBlog/:id" element={<UpdateBlog/>} />        
      </Routes>
    </Router>
  );
};

export default AppRouter;
