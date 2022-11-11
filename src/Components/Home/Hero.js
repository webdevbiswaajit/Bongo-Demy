import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className=" bg-dark-blue">
        <div className="container  mx-auto">
          <div className=" py-24">
            <p className=" text-white font-medium text-base leading-6 font-rubic">
              Do you know a cyber attack ruins a company in a moment, and
              cyberbullying can cause suicide? <br /> BongoDemy. A cybersecurity
              platform, that will cover all your security needs.
            </p>
            <p className="text-base font-rubic text-dark-blue bg-light-green  py-3 px-7  rounded-3xl  inline-block mt-5">
              <Link to="/">Get Started</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
