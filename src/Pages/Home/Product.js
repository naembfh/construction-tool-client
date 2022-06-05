import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Product = ({product}) => {
  const [user]=useAuthState(auth)
    const {_id,name,img,description,quantity,minimumOrder,price}=product;
    const [admin]=useAdmin(user)
    
    return (
//         <div class="card w-96 bg-base-100 shadow-xl">
//   <figure class="px-10 pt-10">
//     <img src={img} alt="Shoes" class="rounded-xl" />
//   </figure>
//   <div class="card-body items-center text-center">
//     <h2 class="card-title">{name}</h2>
//     <p>{description.slice(0,200)}</p>
//     <h3><span>Price : </span>{price} RM / Product</h3>
//     <h3 >In Stock : {quantity} Product</h3>
//     <h3>Minium order atleast {minimumOrder} Product Applicable</h3>

//     {!admin && <div class="card-actions">
//       <Link className='btn btn-primary'  to={`/purchase/${_id}`}>Buy Now</Link>
//     </div>}
//     {
//       admin && <button className='btn btn-primary' >Delete Product</button>
//     }
//   </div>
// </div>

<div class="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p title={description}>{description.slice(0,200)}</p>
    <h3><span>Price : </span>{price} RM / Product</h3>
    <h3 >In Stock : {quantity} Product</h3>
    <h3>Minium order atleast {minimumOrder} Product Applicable</h3>
    <div class="card-actions justify-end">
    
     { <Link className='btn btn-secondary'  to={`/purchase/${_id}`}>Buy Now</Link>}

    </div>
  </div>
</div>

    );
};

export default Product;