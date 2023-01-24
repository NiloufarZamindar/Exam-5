import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const Navigation = ({ navToggle }) => {
  const navcontainer = useRef(null);
  /*   props.nav = navcontainer; */
  useEffect(() => {
    if (navToggle === false) {
      navcontainer.current.classList.add("navclose");
    } else {
      navcontainer.current.classList.remove("navclose");
    }
  }, [navToggle]);
  return (
    <>
      <div className="navcontainer" ref={navcontainer}>
        <nav className="nav">
          <div className="nav-upper-options">
            <Link to="/product">
              <div className="nav-option active">
                <span className="nav-icon">
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                </span>
                <h3>Sushis</h3>
              </div>
            </Link>
            <div className="nav-option logout">
              <span className="nav-icon">
                <i className="fa fa-glass" aria-hidden="true"></i>
              </span>
              <h5 style={{ color: "#959595" }}>Other Products</h5>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
