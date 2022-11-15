import React from "react";
import service1 from "../../img/s1.png";
import service2 from "../../img/s2.png";
import service3 from "../../img/s3.png";
import service4 from "../../img/s4.png";

function Service() {
  return (
    <>
      <div className=" bg-dark-blue py-12">
        <div className="container mx-auto">
          <h2 className=" text-center  text-light-green text-2xl  font-medium font-rubic">
            Our Services
          </h2>
          <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
            We bring together a variety of cutting-edge services and technical
            <br />
            assets to give your company the level of solution support it
            requires.
          </p>
          <div className=" flex justify-center mt-10">
            <div className=" flex gap-20">
              <div className="">
                <div className="w-full flex justify-center">
                  <img className="" src={service1} alt="..." />
                </div>
                <p className=" text-light-green  text-lg   font-medium font-rubic">
                  Web Application Penetration Test
                </p>
              </div>
              <div className="">
                <div className="w-full flex justify-center">
                  <img className="" src={service2} alt="..." />
                </div>
                <p className=" text-light-green  font-medium  text-lg font-rubic">
                  Mobile Application Penetration Test
                </p>
              </div>
            </div>
          </div>

          <div className=" flex justify-center mt-10">
            <div className=" flex gap-20">
              <div className="">
                <div className="w-full flex justify-center">
                  <img className="" src={service3} alt="..." />
                </div>
                <p className=" text-light-green  text-lg   font-medium font-rubic">
                  Network Penetration Test
                </p>
              </div>
              <div className="">
                <div className="w-full flex justify-center">
                  <img className="" src={service4} alt="..." />
                </div>
                <p className=" text-light-green  font-medium  text-lg font-rubic mt-3">
                  Forensic & Crime Investigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
