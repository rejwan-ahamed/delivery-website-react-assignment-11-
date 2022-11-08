import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      <h1 className="font-general font-[600] text-4xl text-center mt-24">
        Our services.
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-10 mb-10 px-24">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="details-button flex justify-center mb-10">
        <button
          type="button"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          View all services
        </button>
      </div>
    </div>
  );
};

export default Cards;
