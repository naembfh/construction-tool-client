import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({myorder}) => {
    const {totalPrice}=myorder;
    // console.log(totalPrice)
    const stripe = useStripe();
  const elements = useElements();
  const [cardError,setCardError]=useState('')
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret)

useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ totalPrice })
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          if(data.clientSecret){
              
            setClientSecret(data.clientSecret)   
          }
       
      });
},[totalPrice])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if (!stripe) {
            
            return;
          }
      
          
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

    // console.log(error)
    setCardError(error.message || '')
  }
    return (
       <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-xs btn-success mt-4' type="submit" disabled={!useStripe }>
        Pay
      </button>
    </form>
    {cardError && <p className='text-xs text-primary'>{cardError}</p>}
       </>
    );
};

export default CheckoutForm;