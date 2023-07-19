import React from "react";
import { Routes, Route } from "react-router-dom";

import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Forgot from "../components/Forgot";

const Login: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
};

export default Login;
