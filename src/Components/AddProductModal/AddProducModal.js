import React from "react";
import { useState } from "react";

const AddProducModal = ({ isVisible, onClose }) => {
  const [products, setProducts] = useState({});
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapped") onClose();
  };

  const handleInputBlur = event =>{
    event.preventDefault();
    const value = event.target.value;
    const field = event.target.name;

    const newProduct  = {...products}
    newProduct[field]= value;
    setProducts(newProduct)
    

}

  const handleAddProduct = (event) => {
    event.preventDefault();
    console.log(products);

   

    fetch("http://localhost:5001/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          alert('product added')
          event.target.reset();
        }
      });
  };
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
          <form
            action="
        "
            onSubmit={handleAddProduct}
          >
            <div className="flex justify-between">
              <div>
                <h5 className="text-xl font-semibold mb-1">Prodtuct Name</h5>
                <input
                onBlur={handleInputBlur}
                  type="text"
                  name="name"
                  id=""
                  placeholder="iphone 14 pro max"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-1">Category</h5>
                <input
                onBlur={handleInputBlur}
                  type="text"
                  name="category"
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
                onBlur={handleInputBlur}
                  type="text"
                  name="brand/company"
                  id=""
                  placeholder="Apple"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-1">Price</h5>
                <input
                onBlur={handleInputBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="price"
                  id=""
                  placeholder="$999"
                />
              </div>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-1 mt-2">IMEI/Poduct Code</h5>
              <input
              onBlur={handleInputBlur}
                type="text"
                name="productCode"
                id=""
                placeholder="#98709870"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-1 mt-2">Supplier</h5>
              <input
              onBlur={handleInputBlur}
                type="text"
                name="supplier"
                id=""
                placeholder="supplier"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-1 mt-5">Product Details</h5>
              <input
              onBlur={handleInputBlur}
                type="text"
                name="details"
                id=""
                placeholder="details"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full leading-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <button className="text-2xl mt-5 bg-blue-700 text-white p-3 font-semibold rounded rounded-xl" type="submit">
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
