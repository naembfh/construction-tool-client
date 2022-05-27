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
       <div>
           <h1>What our customers say</h1>
            <div className='grid grid-cols-4 gap-3'>
            {reviews.map(review=> <Review
            key={review._id}
            review={review}
            ></Review>)}
        </div>
       </div>
    );
};

export default Reviews;