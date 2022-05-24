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
        <div>
            <h1>Our Products {products.length}</h1>
            {products.map(product=> <Product
            product={product}
            key={product._id}
            ></Product>)}
        </div>
    );
};

export default Products;