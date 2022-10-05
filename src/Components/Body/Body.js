import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import Invoice from "../Invoice/Invoice";
import Search from "../Search/Search";
import TotalProductField from "../TotalProductField/TotalProductField";

const Body = () => {
  return (
    <div className="">
      <div>
        <Search></Search>
      </div>
      <div>
        <TotalProductField></TotalProductField>
      </div>
      <div>
        <AddProduct></AddProduct>
      </div>
      <div>
        <Invoice></Invoice>
      </div>
    </div>
  );
};

export default Body;
