import Hero from "./Hero";
import Events from "./Events";
import { useState } from "react";
import Footer from "./Footer";

const Home = ({ dbData,activeCategory,setActiveCategory,isLoading }) => {
  return (
    <>
      <Hero />
      <Events
        dbData={dbData}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
};

export default Home;
