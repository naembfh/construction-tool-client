import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3TYRGWFP0zytG4MSCWcHjz9vrMm3ug9NiT9Au2oW2r878tEGxBO22ttlbonexKm4nZtyrXWlx1db32LmsOOzyF00DheeBIbg');

const Payment = () => {
    const {id}=useParams()
    const url=`https://polar-shelf-77839.herokuapp.com/orders/${id}`
    const {data:myorder,isLoading}=useQuery(['order',id],()=> fetch(url,{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        } 
    }).then(res=>res.json()))
    // console.log(myorder)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
           
  <div class="card w-50 bg-base-100 shadow-xl ">
  <div class="card-body">
    <h2 class="card-title">Pay for {myorder.name}</h2>
    
   <p>Total Price ${myorder.totalPrice}</p>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div class="card-body">
      <Elements stripe={stripePromise}>
      <CheckoutForm myorder={myorder} />
    </Elements>
        
      </div>
    </div>
 
        </div>
    );
};

export default Payment;