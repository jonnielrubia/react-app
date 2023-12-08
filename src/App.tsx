import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./component/login/loginPage";
import Dashboard from "./component/dashboard/dashboard";
import Homepage from "./component/homepage/homepage";
import RegisterPage from "./component/registerpage/registerpage";
import ProductDetails from "./component/product/productdetails";

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <>
      <Router>
        <Routes>
        {/* <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} /> */}
          {/* {isLoggedIn ? ( */}
            <Route path="/dashboard" element={<Dashboard />} />
          {/* ) : ( */}
            <Route path="/login" element={<LoginPage />} />
          {/* )}   */}
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
