import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({review}) => {
    const {rating,comment}=review;
    return (
        <div>
            <Rating
    initialRating={rating}
    emptySymbol={<FontAwesomeIcon icon={faStar} />}
    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
    readonly
></Rating>
<div><p>{comment}</p></div>
        </div>
    );
};

export default Review;