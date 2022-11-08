import React from "react";

const Bottom = () => {
  return (
    <div>
      <div className="section-1 grid sm:flex sm:mt-32 px-8 sm:px-0 mt-20">
        <div className="hero-left w-full sm:w-1/2 text-left order-2 sm:order-1 mt-8 sm:mt-0">
          <h1 className="font-general font-[600] text-4xl">
            Get your delivery in 24h.
          </h1>
          <p className="font-general text-left font-medium mb-6 mt-6 w-[70%]">
            Get your order in just 24 hours from any where in Bangladesh. If your are located in Noakhali or Dhaka you can enjoy our prime delivery service get your delivery just 8h. We are now tayup with ali express to import goods from china.
          </p>
        </div>
        <div className="hero-right w-full sm:w-1/2  order-1 sm:order-2">
          <img src="/assets/images/PNG/2.png" alt="" className="w-full sm:w-[30rem]" />
        </div>
      </div>

      <div className="section-2 grid sm:flex sm:mt-32 sm:mb-32 px-8 sm:px-0 mt-10 mb-10">
        <div className="hero-left w-full sm:w-1/2">
          <img src="/assets/images/PNG/3.png" alt="" className="w-full sm:w-[30rem]" />
        </div>

        <div className="hero-right w-full sm:w-1/2 text-left">
          <h1 className="font-general font-[600] text-4xl">
            247 customer support.
          </h1>
          <p className="font-general text-left font-medium mb-6 mt-6 w-full sm:w-[70%]">
           Our support team is always here for you. We start 274 customer support in Bangladesh.
           We try our best to serve our customers in best possible ways. Please contact us if you are fessing any problem. We will try our best to fixed your problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
