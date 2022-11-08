import React from "react";
import Card from "./Card";
import UseTitle from "./Title";

const Servies = () => {
  UseTitle('All our services')
  return (
    <div>
      <h1 className="font-general text-4xl text-center font-[600] mt-24">Our All services.</h1>
      <div className="grid grid-cols-4 gap-6 mt-10 mb-10 px-24">
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
      </div>
    </div>
  );
};

export default Servies;
