import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url='https://polar-shelf-77839.herokuapp.com/product'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
       <div>
           <h1>Our Products Number {products.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
            
            {products.map(product=> <Product
            product={product}
            key={product._id}
            ></Product>)}
        </div>
       </div>
    );
};

export default Products;