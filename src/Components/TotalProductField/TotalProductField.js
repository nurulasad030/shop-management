import React from "react";

const TotalProductField = () => {
  return (
    <div className="flex border-4 border-gray-400 rounded justify-center p-2">
      <div className="bg-green-300  p-5">
        <h1 className="text-3xl font-bold">Total Product</h1>
        <h3 className="text-xl font-bold">1500</h3>
      </div>
      <div className="bg-red-300  p-5 ml-3">
        <h1 className="text-3xl font-bold">Today sell</h1>
        <h3 className="text-xl font-bold">$350,000</h3>
      </div>
    </div>
  );
};

export default TotalProductField;
