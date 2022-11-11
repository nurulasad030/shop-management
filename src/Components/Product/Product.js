import React from 'react';

const Product = ({product}) => {
    const {name,id,category,productCode,price,supplier} = product;
    return (
        <div>
            
            <div className='grid grid-cols-5
             border border-3 border-gray-400'>
            <h2 className='m-3'>{name}</h2>
            <h2 className='m-3'>{category}</h2>
            <h2 className='m-3'>{supplier}</h2>
            <h2 className='m-3'> ${price}</h2>
            <h2 className='m-3'> {productCode}</h2>
            </div>
        </div>
    );
};

export default Product;