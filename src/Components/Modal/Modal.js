import React, { useEffect, useState } from 'react';

const Modal = ({isVisible,onClose}) => {
    if(!isVisible) return null;

    const handleClose=(e)=>{
        if(e.target.id === 'wrapped') onClose();
    }
// main arry of object 
 const [products,setProducts] = useState([]);

// input field state
    const [productName,setProductName] = useState("")
    const [category,setCategory] = useState('')
    const [company,setCompany] = useState('')
    const [price,setPrice] = useState('')
    const [details,setDetails] = useState('')

    const handleClick= () =>{
        

        // creating obj
        let product = {
            productName ,
            category ,
            company ,
            price ,
            details,

        }
        console.log('hello from handle click');
        setProducts([...products,product]);
        setProductName('');
        setCategory('');
        setCategory('');
        setPrice('');
        setDetails('');
    }
    useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products));
      },[products])
    


    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded '  id='wrapped' onClick={handleClose}>
            <div className='w-[600px] flex flex-col rounded-2'>
                <button className='text-white text-xl place-self-end' onClick={ ()=>onClose()}>X</button>
                <from >
                <div className='bg-white p-8 rounded rounded-5 '>
                    <h2 className='text-4xl font-bold mt-3 mb-5'>Add Product</h2>
                   <div className='flex justify-between'>
                        <div>
                                <h5 className='text-xl font-semibold mb-1'>Prodtuct Name</h5>
                                <input type="text" name="" id="productName" placeholder='iphone 14 pro max' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                                onChange={(e)=>setProductName(e.target.value)} value={productName}/>
                            </div>
                            <div>
                                <h5 className='text-xl font-semibold mb-1'>Category</h5>
                                <input type="text" name="" id="category" placeholder='Electronics' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                onChange={(e)=>setCategory(e.target.value)} value={category}/>
                            </div>
                   </div>
                   <div className='flex justify-between mt-5 mb-5'>
                            <div>
                                    <h5 className='text-xl font-semibold mb-1'>Brand/Company</h5>
                                    <input type="text" name="" id="company" placeholder='Apple' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                                    onChange={(e)=>setCompany(e.target.value)} value={company}/>
                                </div>
                                <div>
                                    <h5 className='text-xl font-semibold mb-1'>Price</h5>
                                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" name="" id="price" placeholder='$999'
                                    onChange={(e)=>setPrice(e.target.value)} value={price}/>
                                </div>
                   </div>

                   <div>
                    <h5 className='text-xl font-semibold mb-1'>Product Details</h5>
                    <input type="text" name="" id="productDetail" 
                    placeholder='details' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full leading-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    onChange={(e)=>setDetails(e.target.value)} value={details}/>
                   </div>

                   <div>
                    <button className='text-2xl mt-5 bg-blue-700 text-white p-3 font-semibold rounded rounded-xl' type='submit' onClick={handleClick}
                    >Add Product</button>
                   </div>
                    
                    
                    
                    </div>
                </from>
                    </div>
        </div>
    );
};

export default Modal;