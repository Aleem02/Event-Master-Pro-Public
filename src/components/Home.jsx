import Hero from "./Hero";
import Events from "./Events";
import { useState } from "react";

const Home = ({ dbData }) => {
  return (
    <>
      <Hero />
      <Events dbData={dbData} />
    </>
  );
};

export default Home;
