"use client";
import React, { useEffect } from "react";
import HomeSwiper from "./_components/HomeSwiper/HomeSwiper";
import Brand from "./_components/Brand/Brand";
import Information from "./_components/Information/Information";
import Suitproducts from "./_components/Suitproducts/Suitproducts";
import HomePhoto from "./_components/HomePhoto/HomePhoto";
import AOS from "aos";
import FlexSuits from "./_components/FlexSuits/FlexSuits";
import Customer from "./_components/Customer/Customer";
import Recent from "./_components/Recent/Recent";
import ServicesHome from "./_components/ServicesHome/ServicesHome";
import HomeImages from "./_components/HomeImages/HomeImages";
const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({ duration: 1000, offset: 200 });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <HomeSwiper />
      <Brand />
      <Information />
      <Suitproducts />
      <HomePhoto />
      <FlexSuits />
      <Customer />
      <Recent />
      <ServicesHome />
      <HomeImages />
    </div>
  );
};

export default Home;
