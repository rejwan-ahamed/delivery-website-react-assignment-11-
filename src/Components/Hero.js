import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="main-hero-section w-full grid sm:flex lg:flex justify-between px-8 sm:px-0">
        <div className="hero-left w-full lg:w-1/2 text-left mt-6 order-2 sm:order-1 sm:mt-20 lg:mt-40">
          <h1 className="font-general font-[600] text-4xl">
            Jonker express. 247 delivery.
          </h1>
          <p className="font-general text-left font-medium mb-6 mt-6 w-full lg:w-[80%] text-xl">Door-to-door service, 24 hours a day, 7 days a week, 365 days a year. Same day service in Southern California. Delivered your products around the world. Also in your national region we are currently operation in Bangladesh Dhaka to Noakhali.</p>
          <Link to='/register' type="button" class="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Register now</Link>
        </div>
        <div className="hero-right w-full lg:w-1/2 order-1 sm:order-2 mt-10 sm:mt-20 lg:mt-0">
          <img src="/assets/images/PNG/1.png" alt="" className="w-[30rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
