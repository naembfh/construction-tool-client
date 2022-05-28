import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
fetch('https://polar-shelf-77839.herokuapp.com/reviews')
.then(res=>res.json())
.then(data=>setReviews(data))
    },[])
    return (
       <div className='container border'>
           <h1 className='text-3xl text-center mt-3'>Reviews And FeedBack</h1>
            <div className='grid grid-cols-3 gap-2'>
            {reviews.map(review=> <Review
            key={review._id}
            review={review}
            ></Review>)}
        </div>
       </div>
    );
};

export default Reviews;