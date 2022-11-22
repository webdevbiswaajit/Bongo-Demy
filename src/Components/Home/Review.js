import React from "react";
import School from "../../JsonData/Data.js";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

function Review() {
  return (
    <>
      <div className=" bg-light-green py-10">
        <h2 className="text-center text-dark-blue text-2xl  font-medium font-rubic mb-5">
          What our clients are saying
        </h2>
        <div className="container mx-auto">
          <div className=" w-4/5 mx-auto school">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              freeMode={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper"
            >
              {School.map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    className=""
                    style={{
                      backgroundImage: `url(${data.img})`,
                      width: 300,
                      height: 300,
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className=" text-center">
              <p className="text-base font-rubic bg-dark-blue text-light-green  py-3 px-7  rounded-3xl  inline-block mt-5">
                <Link to="/">See More</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
