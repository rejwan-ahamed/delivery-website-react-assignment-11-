import React from "react";
import Bottom from "./Bottom";
import Cards from "./Cards";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <div className="main-home-section md:px-20 lg:px-40">
        <Hero></Hero>
        <Cards></Cards>
        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default Home;
