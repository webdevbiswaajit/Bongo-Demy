import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Menu from "../common/Menu";
import Achievements from "../Components/Home/Achievements";
import Hero from "../Components/Home/Hero";
import NewsLatter from "../Components/Home/NewsLatter";
import Review from "../Components/Home/Review";
import SchoolSlide from "../Components/Home/SchoolSlide";
import Service from "../Components/Home/Service";
import ShortTour from "../Components/Home/ShortTour";
import Start from "../Components/Home/Start";
import WhyUs from "../Components/Home/WhyUs";

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
      <NewsLatter />
      <Review />
      <WhyUs />
      <Footer />
    </>
  );
}

export default Home;
