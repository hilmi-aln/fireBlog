import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router} from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      {/* <Routes><Route path="/" component={Dashboard} /></Routes> */}
    </Router>
  );
};

export default AppRouter;
