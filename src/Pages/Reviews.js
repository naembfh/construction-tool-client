import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/reviews')
.then(res=>res.json())
.then(data=>setReviews(data))
    },[])
    return (
       <div className='container border'>
           <h1 className='text-3xl text-center m-3'>Reviews And FeedBack</h1>
            <div className='grid  gap-2 md:grid-cols-3 sm:grid-cols-1'>
            {reviews.map(review=> <Review
            key={review._id}
            review={review}
            ></Review>)}
        </div>
       </div>
    );
};

export default Reviews;