import React, { useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
   
    const allProducts = useLoaderData();
    
    return (
        <div>
            <h2 className='text-4xl text-center m-5 font-bold' > Total Products : {allProducts.length}</h2>
            <div>
            <div className='grid grid-cols-5 sticky top-16 bg-slate-50 ml-[3px]'>
            <h2 className='text-2xl m-3'>Name </h2>
            <h2 className='text-2xl m-3'>Category </h2>
            <h2 className='text-2xl m-3'>Supplier</h2>
            <h2 className='text-2xl m-3'>Price </h2>
            <h2 className='text-2xl m-3'>Product code/IMEI</h2>
            </div>
                {
                    allProducts .map(product=> <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;