import React from "react";
import CountUp from "react-countup";

function Achievements() {
  return (
    <>
      <div className=" bg-dark-blue py-12">
        <div className="conatainer mx-auto">
          <div className="">
            <h1 className=" font-medium text-light-green text-2xl text-center font-rubic">
              Our Achievements
            </h1>
            <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
              We got Jash Asian Award. We're finalists in MeenaHackathon, IEEE{" "}
              <br />
              YESIST12, and Startup Istanbul.
            </p>
          </div>
          <div className=" w-4/5 mx-auto mt-20">
            <div className="grid  grid-cols-4 gap-5 ">
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center ">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={400} duration={3.75} enableScrollSpy={true} />
                    +
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Bugs Found
                </p>
              </div>
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center ">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={180} duration={3.75} enableScrollSpy={true} />
                    +
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Services Provided
                </p>
              </div>
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center  mt-6">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={120} duration={3.75} enableScrollSpy={true} />
                    +
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Cyberbullying Victims <br /> Received Aid
                </p>
              </div>
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center ">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={90} duration={3.75} enableScrollSpy={true} />+
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Clients Served
                </p>
              </div>
            </div>
          </div>
          <div className=" w-4/5 mx-auto  mt-16">
            <div className="grid  grid-cols-4 gap-5 ">
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center ">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={100} duration={3.75} enableScrollSpy={true} />
                    +
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Campus Ambassadors
                </p>
              </div>
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center mt-6 ">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={180} duration={3.75} enableScrollSpy={true} />
                    +
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Students Secured <br /> from Cybercrime
                </p>
              </div>
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center  mt-6">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={600} duration={3.75} enableScrollSpy={true} />
                    +
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Employees Secured <br /> from Cyberattacks
                </p>
              </div>
              <div className="flex  flex-col justify-center items-center">
                <div className="  w-28 h-28  border-6  border-light-green rounded-full flex justify-center items-center mt-6 ">
                  <h2 className=" text-light-green font-rubic  text-base font-medium">
                    <CountUp end={9} duration={3.75} enableScrollSpy={true} />+
                  </h2>
                </div>
                <p className=" text-white font-medium text-base leading-6 font-rubic text-center mt-5">
                  Secured Application <br /> Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
