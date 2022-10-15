import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="">

<div >
        <div
          className="row-span-3 sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000 p-2 w-[268px] overflow-y-auto text-center bg-gray-900 shadow h-screen"
        >
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center rounded-md">
              <i
                className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"
              ></i>
              <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold">
                Shop management
              </h1>
              <i
                className="bi bi-x ml-20 cursor-pointer lg:hidden"
                onclick="Openbar()"
              ></i>
            </div>

            <hr className="my-2 text-gray-600" />

            <div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700"
              >
                <i className="bi bi-search text-sm"></i>
                <input
                  className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                  placeholder="Serach"
                />
              </div>

              <Link to={'/dashboard'}  className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
               
              
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Dashboard</span></Link>
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200"
                  >Administration</span
                >
              </div>
              <Link to={'/products'}  className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
               
              
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Products</span></Link>
              
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Purchase</span>
              </div>
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Payment</span>
              </div>
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Stock</span>
              </div>
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Customers</span>
              </div>
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Supplier</span>
              </div>
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">SalesOrder</span>
              </div>
              <div
                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200">Return</span>
              </div>
              <hr className="my-4 text-gray-600" />

              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
            

        </div>
    );
};

export default SideBar;