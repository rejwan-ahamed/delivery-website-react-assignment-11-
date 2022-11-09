
import Bottom from "./Bottom";
import Cards from "./Cards";
import Hero from "./Hero";
import UseTitle from "./Title";

const Home = () => {
  UseTitle("Welcome to jonker express");
  return (
    <div>
      <div className="main-home-section md:px-20 lg:px-20 xl:px-40">
        <Hero></Hero>
        <Cards></Cards>
        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default Home;
