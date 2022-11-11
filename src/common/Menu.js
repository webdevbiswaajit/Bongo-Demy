import React from "react";

function Menu() {
  return (
    <>
      <div className=" bg-light-green py-5">
        <div className="container mx-auto">
          <div className=" grid grid-cols-8">
            <div className=" col-span-2"></div>
            <div className=" col-span-6">
              <ul className="flex items-center  justify-end">
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  Home
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  Service
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  Training
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  Product
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  Company
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  Resources
                </li>
                <li className=" mr-12 text-base text-black  leading-5 from-emerald-500 font-rubic">
                  Contact Us
                </li>
                <li className=" text-base  font-rubic    bg- bg-dark-blue text-light-green  py-3 px-7  rounded-3xl">
                  Sign Up/Login
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
