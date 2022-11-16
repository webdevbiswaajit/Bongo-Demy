import React from "react";

function NewsLatter() {
  return (
    <>
      <div className=" bg-dark-blue py-9">
        <div className="container mx-auto">
          <h2 className=" text-2xl font-medium font-rubic text-light-green">
            Yours Free: Get a free report!
          </h2>
          <p className="text-base text-white font-rubic font-medium mt-9">
            BongoDemy is here to protect your data, assets, and organization.
            <br />
            Please enter your email address to receive your free security
            testing report.
          </p>
          <div className=" w-5/12  h-11 border-2 border-light-green rounded-full mt-9 flex items-center">
            <div className="w-full flex items-center justify-between">
              <input
                className=" bg-transparent pl-8 py-2 border-none focus:outline-none text-white focus:text-white   w-4/6"
                type="email"
                placeholder="Enter business email "
              />
              <div
                className=" bg-light-green px-6 py-2 rounded-full"
                style={{ "margin-right": "-2px" }}
              >
                <button
                  type="submite"
                  className=" bg-transparent text-base font-medium text-dark-blue"
                >
                  Grab free copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLatter;
