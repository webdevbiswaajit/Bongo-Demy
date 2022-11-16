import React from "react";
import { Icon } from "@iconify/react";
function Start() {
  return (
    <>
      <div className=" bg-light-green py-6">
        <div className="container mx-auto">
          <div className="">
            <h2 className="text-center text-dark-blue text-2xl  font-medium font-rubic">
              How We Start
            </h2>
          </div>
          <div className=" w-4/5 mx-auto mt-12">
            <div className="grid grid-cols-4">
              <div className=" flex flex-col items-center">
                <div className="">
                  <h2
                    className=" font-bold text-base  text-center text-white font-rubic mb-2
                  "
                  >
                    Now
                  </h2>
                </div>
                <div className="">
                  <div className=" w-24 h-24 bg-dark-blue rounded-full flex justify-center items-center line1">
                    <p className=" text-light-green text-3xl">
                      <Icon icon="mdi:message-processing-outline" />
                    </p>
                    <div className="line2"></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-center text-white font-medium text-base mt-2">
                    Discuss your <br /> project with us.
                  </p>
                </div>
              </div>
              <div className=" flex flex-col items-center ">
                <div className="">
                  <h2
                    className=" font-bold text-base  text-center text-white font-rubic mb-2
                  "
                  >
                    In 12 hours
                  </h2>
                </div>
                <div className="">
                  <div className=" w-24 h-24 bg-dark-blue rounded-full flex justify-center items-center  line1">
                    <p className=" text-light-green text-3xl">
                      <Icon icon="material-symbols:edit-square-outline-sharp" />
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-center text-white font-medium text-base mt-2">
                    Sign service <br /> agreement
                  </p>
                </div>
              </div>
              <div className=" flex flex-col items-center  ">
                <div className="">
                  <h2
                    className=" font-bold text-base  text-center text-white font-rubic mb-2
                  "
                  >
                    In 24 hours
                  </h2>
                </div>
                <div className="">
                  <div className=" w-24 h-24 bg-dark-blue rounded-full flex justify-center items-center  line1">
                    <p className=" text-light-green text-3xl">
                      <Icon icon="material-symbols:check-circle-outline-rounded" />
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-center text-white font-medium text-base mt-2">
                    Schedule team allocation, <br /> Set up communication,{" "}
                    <br /> prioritize tasks, <br /> and set milestones.
                  </p>
                </div>
              </div>
              <div className=" flex flex-col items-center  ">
                <div className="">
                  <h2
                    className=" font-bold text-base  text-center text-white font-rubic mb-2
                  "
                  >
                    In 36 hours
                  </h2>
                </div>
                <div className="">
                  <div className=" w-24 h-24 bg-dark-blue rounded-full flex justify-center items-center">
                    <p className=" text-light-green text-3xl">
                      <Icon icon="clarity:line-chart-line" />
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-center text-white font-medium text-base mt-2">
                    Start getting services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;
