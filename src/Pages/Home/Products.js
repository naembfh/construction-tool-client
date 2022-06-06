import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url='http://localhost:5000/product'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
       <div className='container'>
           <h1 className='text-3xl text-center m-3'>Our Products Number {products.length}</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 m-4'>
            
            {products.map(product=> <Product
            product={product}
            key={product._id}
            ></Product>)}
        </div>
       </div>
    );
};

export default Products;