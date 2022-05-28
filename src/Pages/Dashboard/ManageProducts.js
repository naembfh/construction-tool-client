import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const ManageProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url='https://polar-shelf-77839.herokuapp.com/product'
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

export default ManageProducts;