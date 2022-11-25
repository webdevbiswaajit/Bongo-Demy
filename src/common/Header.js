import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  return (
    <>
      <div className=" bg-dark-blue py-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center ">
            <div className="">
              <img className="" src={logo} alt="logo" />
            </div>
            <div className="">
              <p className=" text-white bg-light-green font-rubic py-3 px-7  rounded-3xl">
                <Link to="/">Loot Shop</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
