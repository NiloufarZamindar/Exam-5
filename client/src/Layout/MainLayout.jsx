import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navigation from "./Navigation";
import "../assets/css/login.css";
import "../assets/css/app.css";
import "../assets/css/resp_app.css";
import "../assets/css/product.css";
import "../assets/css/orders.css";
import "../assets/css/cart.css";

import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
};

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/product");
    }
  }, [navigate, location]);
  const [navToggle, setNavToggle] = useState(true);
  const handleShowNav = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <Header handleShowNav={handleShowNav} />
      <div className="main-container">
        <Navigation navToggle={navToggle} />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
