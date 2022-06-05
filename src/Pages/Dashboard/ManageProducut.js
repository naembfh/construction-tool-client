import React from 'react';
import { toast } from 'react-toastify';

const ManageProducut = (product,index) => {
    
    const {name,_id}=product.product;
    const deleteProduct=()=>{
        fetch(`http://localhost:5000/product/${_id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast('Successfully Deleted Product')
            }
        })
    }
    return (
        <tr>
        <th>{(product.index)+1}</th>
        <td>{name}</td>
        <td><button className='btn btn-primary btn-xs' onClick={deleteProduct} >Delete Product</button></td>
        
      </tr>
    );
};

export default ManageProducut;