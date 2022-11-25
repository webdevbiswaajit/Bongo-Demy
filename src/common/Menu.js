import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

function Menu() {
  return (
    <>
      <div className=" bg-light-green py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-8 items-center">
            <div className=" col-span-2">
              <p className=" text-3xl  text-dark-blue">
                <Icon icon="ion:menu" />
              </p>
            </div>
            <div className=" col-span-6">
              <ul className="sm:flex items-center  justify-end">
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  <NavLink to="/service"> Service</NavLink>
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  <NavLink to="/training"> Training</NavLink>
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  <NavLink to="/product"> Product</NavLink>
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  <NavLink to="/company"> Company</NavLink>
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  <NavLink to="/resources">Resources</NavLink>
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li className=" text-base  font-rubic    bg- bg-dark-blue text-light-green  py-3 px-7  rounded-3xl">
                  <NavLink to="/auth"> Sign Up/Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
