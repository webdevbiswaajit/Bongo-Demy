import React from "react";
import { Icon } from "@iconify/react";

function WhyUs() {
  return (
    <>
      <div className=" bg-dark-blue py-6">
        <div className="container mx-auto">
          <h2 className="font-medium text-light-green text-2xl text-center font-rubic">
            Why us
          </h2>
          <div className=" w-4/5 mx-auto mt-10">
            <div className=" grid grid-cols-2 gap-10">
              <div className="">
                <div className=" flex items-center">
                  <p className=" text-base font-rubic text-light-green font-medium">
                    Price Advantage
                  </p>
                  <span className=" text-lg font-rubic text-light-green font-medium ml-2.5">
                    <Icon icon="ant-design:dollar-circle-filled" />
                  </span>
                </div>
                <p className="text-base font-rubic text-white font-medium mt-2.5  text-justify">
                  Best services within your budget. Our consultants will give
                  you even more information on whether you need certain types of
                  services.
                </p>
              </div>
              <div className="">
                <div className=" flex items-center">
                  <p className=" text-base font-rubic text-light-green font-medium">
                    Perfect Process
                  </p>
                  <span className=" text-lg font-rubic text-light-green font-medium ml-2.5">
                    <Icon icon="mdi:shield-check" />
                  </span>
                </div>
                <p className="text-base font-rubic text-white font-medium mt-2.5  text-justify">
                  Our testing services are as clear as our pricing. We use
                  various interaction strategies while adhering to the best
                  principles in organizing.
                </p>
              </div>
              <div className="">
                <div className=" flex items-center">
                  <p className=" text-base font-rubic text-light-green font-medium">
                    Timely Results
                  </p>
                  <span className=" text-lg font-rubic text-light-green font-medium ml-2.5">
                    <Icon icon="mdi:clock-time-three-outline" />
                  </span>
                </div>
                <p className="text-base font-rubic text-white font-medium mt-2.5 text-justify">
                  Our corporate credo is to meet deadlines. Before we begin, we
                  extensively examine the job to provide you with the most
                  accurate estimate of when the project will be completed. We
                  despise inconsistencies in the application testing process,
                  and we're sure you don't either
                </p>
              </div>
              <div className="">
                <div className=" flex items-center">
                  <p className=" text-base font-rubic text-light-green font-medium">
                    Long Term Collaboration
                  </p>
                  <span className=" text-lg font-rubic text-light-green font-medium ml-2.5">
                    <Icon icon="ph:chart-line-bold" />
                  </span>
                </div>
                <p className="text-base font-rubic text-white font-medium mt-2.5  text-justify">
                  Our corporate credo is to meet deadlines. Before we begin, we
                  extensively examine the job to provide you with the most
                  accurate estimate of when the project will be completed. We
                  despise inconsistencies in the application testing process,
                  and we're sure you don't either
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
