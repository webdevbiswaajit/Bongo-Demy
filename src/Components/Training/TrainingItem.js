import React from "react";
import { Link } from "react-router-dom";
import course1 from "../../img/t1.png";
import course2 from "../../img/t2.png";
import course3 from "../../img/t3.png";
import course4 from "../../img/t4.png";

function TrainingItem() {
  return (
    <>
      <div className=" py-10 bg-dark-blue">
        <div className="container mx-auto">
          <div className="">
            <h2 className=" text-2xl font-medium text-center text-light-green font-rubic">
              Our Courses & Training
            </h2>
            <p className="text-base text-white font-rubicn text-center font-medium mt-5">
              We offer cybersecurity courses and training in an exciting way.
            </p>
          </div>
          <div className=" w-3/4 mx-auto mt-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="">
                <div className=" flex justify-center">
                  <img className="w-40" src={course1} alt="" />
                </div>
                <h2 className=" text-xl text-light-green font-medium  text-center">
                  Free Training
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  Several specialized cybersecurity courses, training, and
                  resources have been added to this section.
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
                  Courses
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  Introduction to routing and switching, network protocols and
                  services, and network scripting are all covered in cyber
                  security courses. Self-paced windows, ethical hacking, and
                  computer configuration
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
                  Hacking Lab
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  Students will get dozen of cyber security practice machines
                  with explanation videos. Machines are intentionally made
                  vulnerable for education purposes. Don't require
                  high-configuration devices for practicing.
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
                  Battle Ground
                </h2>
                <p className="text-base text-white font-rubic text-center font-medium">
                  King of the Dark (KoTD) is a hacking game in which you compete
                  with other hackers to compromise a machine and then patch its
                  vulnerabilities to prevent other players from gaining access.
                  The longer you keep your access active, the more points you
                  earn.
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

export default TrainingItem;
