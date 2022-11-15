import React from "react";
import { Link } from "react-router-dom";
function ShortTour() {
  return (
    <>
      <div className=" bg-light-green py-14">
        <div className="container mx-auto">
          <div className=" w-4/5 mx-auto">
            <div className="grid grid-cols-6">
              <div className=" col-span-2">
                <button>
                  <img src="" alt="" />
                </button>
              </div>
              <div className=" col-span-4">
                <h2 className=" text-3xl text-white font-rubic">
                  Take a short tour of our platform!
                </h2>
                <p className=" text-base font-rubic text-dark-blue font-medium mt-8">
                  Meet our platform that makes cybersecurity training fun and
                  engaging for students and employees. Also provides
                  cybersecurity solutions for individuals and organizations.
                </p>
                <p className="text-base font-rubic bg-dark-blue text-light-green  py-3 px-7  rounded-3xl  inline-block mt-5">
                  <Link to="/">Start the Tour</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortTour;
