import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckoutForm = ({myorder}) => {
  const [user]=useAuthState(auth)
  // console.log(user)
    const {totalPrice}=myorder;

    // console.log(totalPrice)
    const stripe = useStripe();
  const elements = useElements();
  const [success,setSuccess]=useState('')
  const [transactionId,setTransactionId]=useState('')
  const [cardError,setCardError]=useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [processing,setProccessing]=useState(false)
  

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
    setCardError(error?.message || '')
    setSuccess('')
    setProccessing(true)
    // confirm card payment

    const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name:user?.displayName,
            email:user?.email,
          },
        },
      },
    );
    if(intentError){
      setCardError(intentError?.message)
      setProccessing(false)
    }else{
      setCardError(``)
      // console.log(paymentIntent)
      setTransactionId(paymentIntent?.id)
      setSuccess('Congrats! Your payment is completed')

      // 
const payment={
  transactionId:paymentIntent.id,
  paid:totalPrice,
  name:myorder.name,
}
      fetch(`http://localhost:5000/orders/${myorder._id}`,{
        method:"PATCH",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(payment)
        
      })
      .then(res=>res.json())
      .then(data=>{
        setProccessing(false)
        console.log(data)
      })
    }
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
      <button className='btn btn-xs btn-success mt-4' type="submit" disabled={!useStripe || !clientSecret }>
        Pay
      </button>
    </form>
    {cardError && <p className='text-xs text-primary'>{cardError}</p>}
    {success && <div>
      <p className='text-xs text-green-300'>{success}</p> <p className='text-xs text-green-300'>Your trnsaction Id {transactionId}</p>
      </div>}
       </>
    );
};

export default CheckoutForm;