import React from "react";
import Header from "../common/Header";
import Menu from "../common/Menu";
import Achievements from "../Components/Home/Achievements";
import Hero from "../Components/Home/Hero";
import SchoolSlide from "../Components/Home/SchoolSlide";
import Service from "../Components/Home/Service";
import ShortTour from "../Components/Home/ShortTour";
import Start from "../Components/Home/Start";
import Gap from "./Gap";

function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Hero />
      <ShortTour />
      <Service />
      <SchoolSlide />
      <Achievements />
      <Start />
      <Gap />
    </>
  );
}

export default Home;
