import React from 'react';
import { useForm } from 'react-hook-form';
import {useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url='https://polar-shelf-77839.herokuapp.com/product'
        fetch(url,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
            
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast('Product Added')
                reset()
            }
        })
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-bold text-primary uppercase'>Here You can add new product</h1>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product DesCription</span>
                        </label>
                        <input type="text" placeholder="Product DesCription" class="input input-bordered w-full max-w-xs"
                            {...register("description", { required: true })}
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Quantity</span>
                        </label>
                        <input type="text" placeholder="Product Quantity" class="input input-bordered w-full max-w-xs"
                            {...register("quantity", { required: true })}
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Minimum Order</span>
                        </label>
                        <input type="text" placeholder="Product Minimum Order" class="input input-bordered w-full max-w-xs"
                            {...register("minimumOrder", { required: true })}
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Image</span>
                        </label>
                        <input type="text" placeholder="Product Image" class="input input-bordered w-full max-w-xs"
                            {...register("img", { required: true })}
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Price</span>
                        </label>
                        <input type="text" placeholder="Product Price" class="input input-bordered w-full max-w-xs"
                            {...register("price", { required: true })}
                        />
                    </div>
                    <label class="label text-primary">
                        {errors.name && <span>Name field is required</span>}
                    
                        {errors.description && <span>Description field is required</span>}
                   
                        {errors.quantity && <span>Quantity field is required</span>}
                   
                        {errors.minimumOrder && <span>Minimum Order field is required</span>}
                   
                        {errors.price && <span>Price field is required</span>}
                    
                  
                        {errors.img && <span>Image field is required</span>}
                  </label>
                    <input type="submit" className='btn btn-primary w-full mt-3' value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;