import React from "react";
import { useState } from "react";


const [products,setProducts] = useState;

const AddProducModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapped") onClose();
  };

 


  const handleAddProduct = (event) =>{

    event.preventDefault();

   

    fetch('http://localhost:5000/users',{
        method: 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(products)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
    console.log(user);

   



}
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded "
      id="wrapped"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col rounded-2">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-8 rounded rounded-5 ">
          <h2 className="text-4xl font-bold mt-3 mb-5">Add Product</h2>
        <form action="
        " onSubmit={handleAddProduct}>
            <div className="flex justify-between">
            <div>
              <h5 className="text-xl font-semibold mb-1">Prodtuct Name</h5>
              <input
                type="text"
                name="Name"
                id=""
                placeholder="iphone 14 pro max"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-1">Category</h5>
              <input
                type="text"
                name="Category"
                id=""
                placeholder="Electronics"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-between mt-5 mb-5">
            <div>
              <h5 className="text-xl font-semibold mb-1">Brand/Company</h5>
              <input
                type="text"
                name="Brand/Company"
                id=""
                placeholder="Apple"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-1">Price</h5>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="Price"
                id=""
                placeholder="$999"
              />
            </div>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-1">Product Details</h5>
            <input
              type="text"
              name="Details"
              id=""
              placeholder="details"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full leading-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <button className="text-2xl mt-5 bg-blue-700 text-white p-3 font-semibold rounded rounded-xl">
              Add Product
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducModal;
