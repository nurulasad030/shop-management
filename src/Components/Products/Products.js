import React, { useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
   
    const emaData = useLoaderData();
    const {name} = emaData;
    console.log(emaData);
    return (
        <div>
            <h2 className='text-4xl text-center m-5 font-bold' >Products</h2>
            <div>
            <div className='grid grid-cols-5 sticky top-16 bg-slate-50 ml-[3px]'>
            <h2 className='text-2xl m-3'>Name </h2>
            <h2 className='text-2xl m-3'>Category </h2>
            <h2 className='text-2xl m-3'>Supplier</h2>
            <h2 className='text-2xl m-3'>Price </h2>
            <h2 className='text-2xl m-3'>Stock </h2>
            </div>
                {
                    emaData.map(product=> <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;