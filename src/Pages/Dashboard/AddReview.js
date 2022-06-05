import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [rating,setRating]=useState(0)
    console.log(rating)
   
const onsubmit=data=>{
data.rating=rating;

const url = 'http://localhost:5000/reviews'
fetch(url, {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)

})
    .then(res => res.json())
    .then(result => {
        console.log(result)
        toast('review added')

    })
}

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">

<h2 class="card-title">Please add review</h2>
                <form onSubmit={handleSubmit(onsubmit)}>
                    
                <div class="form-control w-full max-w-xs">
                        <label class="rating">
                            
                            <input type="radio" onClick={()=>setRating(1)} name="rating-1" class="mask mask-star"
                            {...register('rating')}
                            />
                            <input type="radio" onClick={()=>setRating(2)} name="rating-1" class="mask mask-star"
                            {...register('rating')}
                            />
                            <input type="radio" onClick={()=>setRating(3)} value='3' name="rating-1" class="mask mask-star"
                            {...register('rating')}
                            />
                            <input type="radio" onClick={()=>setRating(4)} name="rating-1" class="mask mask-star"
                            {...register('rating')}
                            />
                            <input type="radio" onClick={()=>setRating(5)} name="rating-1" class="mask mask-star"
                            {...register('rating')}
                            />
                            

                        </label>
                        
                    </div>
                <div class="form-control w-full max-w-xs">
                        <label class="label">
                            
                            <input type="text" placeholder="Add Review" class="input input-bordered w-full max-w-xs"
                            {...register('comment',{required:{value:true,}})}
                            />
                            

                        </label>
                        
                    </div>

                    <input className='btn btn-primary w-full' type="submit" value='Add' />

                </form>
            </div>
        </div>
    );
};

export default AddReview;