import React from "react";
import { Link } from "react-router-dom";
import course1 from "../../img/p1.png";
import course2 from "../../img/p2.png";
import course3 from "../../img/p3.png";
import course4 from "../../img/p4.png";

function OurProduct() {
  return (
    <>
      <div className=" py-10 bg-dark-blue">
        <div className="container mx-auto">
          <div className="">
            <h2 className=" text-2xl font-medium text-center text-light-green font-rubic">
              Our Product
            </h2>
            <p className="text-base text-white font-rubicn text-center font-medium mt-5">
              We bring together a variety of cybersecurity solutions as a
              product to <br /> give students and employees support and <br />
              to protect individuals and organizations from cyberattacks.
            </p>
          </div>
          <div className=" w-3/4 mx-auto mt-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="">
                <div className=" flex justify-center">
                  <img className="w-40" src={course1} alt="" />
                </div>
                <h2 className=" text-xl text-light-green font-medium  text-center">
                  Cybercrime
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  BongoDemy tries to assist cybercrime victims.
                </p>
                <div className="text-center mt-3">
                  <span className=" text-base font-rubic  text-dark-blue bg-light-green py-1 px-2 text-center rounded-full">
                    <Link to="/">Learn More</Link>
                  </span>
                </div>
              </div>
              <div className="">
                <div className=" flex justify-center">
                  <img className="w-40" src={course2} alt="" />
                </div>
                <h2 className=" text-xl text-light-green font-medium  text-center">
                  Cybercrime
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  BongoDemy tries to assist cybercrime victims.
                </p>
                <div className="text-center mt-3">
                  <span className=" text-base font-rubic  text-dark-blue bg-light-green py-1 px-2 text-center rounded-full">
                    <Link to="/">Learn More</Link>
                  </span>
                </div>
              </div>

              <div className=" mt-12">
                <div className=" flex justify-center">
                  <img className="w-40" src={course3} alt="" />
                </div>
                <h2 className=" text-xl text-light-green font-medium  text-center">
                  Social Media Security
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  The process of analyzing active social media data in order to
                  protect against security and other threats is known as social
                  media security.
                </p>
                <div className="text-center mt-3">
                  <span className=" text-base font-rubic  text-dark-blue bg-light-green py-1 px-2 text-center rounded-full">
                    <Link to="/">Learn More</Link>
                  </span>
                </div>
              </div>
              <div className=" mt-12">
                <div className=" flex justify-center">
                  <img className="w-40" src={course4} alt="" />
                </div>
                <h2 className=" text-xl text-light-green font-medium  text-center">
                  Organization Security
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  Cybersecurity is an approach that can ensure that your
                  organization's data is safe from attacks. These attacks can
                  take place either externally or internally. An excellent
                  cybersecurity strategy ensures that data integrity,
                  confidentiality, and availability are maintained.
                </p>
                <div className="text-center mt-3">
                  <span className=" text-base font-rubic  text-dark-blue bg-light-green py-1 px-2 text-center rounded-full">
                    <Link to="/">Learn More</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProduct;
