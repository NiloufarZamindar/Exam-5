import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "./../common/isAuth";
import { useSelector } from "react-redux";
const Header = ({ handleShowNav }) => {
  const { products } = useSelector((state) => state.cart);
  const menuToggleHandler = () => {
    handleShowNav();
  };
  return (
    <>
      <header>
        <div className="logosec">
          <div className="logo">Seafloor</div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={menuToggleHandler}
          />
        </div>
        {isAuth() && (
          <div className="message">
            {(products.length) ? <div className="circle"></div>:''}
            <Link to="/cart">
              <span className="cart-icon" title="Show Cart">
                <i className="fa fa-shopping-cart"></i>
              </span>
            </Link>
            <div className="user-dropdown">
              <span
                className="userlogin-icon"
                style={{ fontSize: "25px", color: "#cecece" }}
              >
                <i className="fa fa-user"></i>
              </span>
              <div className="dropdown-content">
                <Link to="/orders">Orders Lits</Link>
                <Link to="/signout">Sign Out</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
