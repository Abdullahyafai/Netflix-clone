import React from "react";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="container-fluid px-5">
        <div className="d-flex justify-content-between mt-4">
          <div>
            <img width='150px' src={logo} className="img-fluid" />
          </div>
          <div>
            <button className="sign-btn" width="10%">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
