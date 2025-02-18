import React from "react";

const Heading = ({ title, subtitle }: any) => {
  return (
    <div className=" text-center m-10 max-w-[600px] mx-auto space-y-2">
      <h1 className=" text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className=" text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};
export default Heading;
