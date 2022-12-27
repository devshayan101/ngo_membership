import React from "react";
import LoginSlide from "./authScreens/LoginScreen";
import LoginSlideVerifyOtp from "./authScreens/LoginScreenVerifyOtp";
import SignupScreen from "./authScreens/SignupScreen";
import SignupScreenVerifyOtp from "./authScreens/SignupScreenVerifyOtp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ScreenController = () => {
  // const baseUrl = "/api/v1/";

  return (
    <Router>
      <div className="main-container">
        <Routes>
        
        <Route
          exact
          path="/login"
          element={ <LoginSlide  />}
        />
        
        <Route
          path="/login/verify-otp"
          element={ <LoginSlideVerifyOtp />}
        />
        
        <Route
          path="/signup"
          element={ <SignupScreen />}
        />
        
        <Route
          path="/signup/verify-otp"
          element={ <SignupScreenVerifyOtp />}
        />
        </Routes>
      </div>
    </Router>
  );
};

export default ScreenController;