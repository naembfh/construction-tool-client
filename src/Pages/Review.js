import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({review}) => {
    const {rating,comment}=review;
    return (
        <div>
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
       <Rating
    initialRating={rating}
    emptySymbol={<FontAwesomeIcon icon={faStar} />}
    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
    readonly
></Rating><p>{comment}</p>
  </div>
</div>

            
         

        </div>
    );
};

export default Review;