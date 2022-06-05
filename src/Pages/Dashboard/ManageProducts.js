import React, { useEffect, useState } from 'react';

import ManageProducut from './ManageProducut';

const ManageProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url='http://localhost:5000/product'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (


        <div class="overflow-x-auto">
        <table class="table w-full">
         
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>Action</th>
             
            </tr>
          </thead>
          {products.map((product,index)=> <ManageProducut
            product={product}
            key={product._id}
            index={index}
            ></ManageProducut>)}
          <tbody>
         
            
          </tbody>
        </table>
      </div>


    );
};

export default ManageProducts;