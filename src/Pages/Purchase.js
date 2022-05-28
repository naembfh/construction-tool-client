import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth)

    const { _id, name, img, description, quantity, minimumOrder, price } = product;


    const [newOrder, setNewOrder] = useState(true)

    useEffect(() => {
        fetch(`https://polar-shelf-77839.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    // const minimumOrderValue = (e) => {
    //     if (e.target.value < minimumOrder) {
    //         toast('can not order')
    //         setNewOrder(e.target.value)
    //     } if (e.target.value > quantity) {
    //         toast('more than quantity')
    //         setNewOrder(e.target.value)
    //     }
    // }



    const onsubmit = data => {
        if (data.totalOrder < minimumOrder || data.totalOrder > quantity) {
            toast('can not');
            setNewOrder(false)
        } else {
            const newPrice = price * data.totalOrder;
            data.totalPrice = newPrice;
            data.name=name;
            console.log(data)
            const url = 'https://polar-shelf-77839.herokuapp.com/orders'
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
                    toast('Order ready for pay')

                })
        }

    }
    return (

        <div class="card card-side bg-base-100 shadow-xl">

            <div class="card  card-compact  bg-base-100 shadow-xl">
                <figure ><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{quantity}</p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>


            <div class="card-body ">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div class="form-control ">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" value={user.email} placeholder="email" class="input input-bordered"
                            {...register("email")}
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input type="text" value={name} readOnly placeholder="name" class="input input-bordered"
                            {...register("name")}
                        />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Total Order</span>
                        </label>
                        <input type="text" placeholder={minimumOrder} class="input input-bordered"
                            {...register("totalOrder", {
                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                },
                            })}
                        />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Minumum Order Total Price</span>
                        </label>
                        <input type="text" readOnly placeholder={minimumOrder * price} class="input input-bordered"
                            {...register("totalPrice")}
                        />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder='Address' class="input input-bordered"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is Required'
                                },
                            })}
                        />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder='Phone Number' class="input input-bordered"
                            {...register("phoneNumber", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is Required'
                                },
                            })}
                        />

                    </div>

                    <div class="form-control mt-6">
                        {/* <button  class="btn btn-primary">Order Now</button> */}
                        {/* <input disabled={minimumOrder > newOrder || newOrder > quantity} className='btn btn-primary w-full' type="submit" value='Order Now' /> */}
                        <input className='btn btn-primary w-full' disabled={!newOrder} type="submit" value='Order Now' />

                    </div>
                </form>
            </div>

        </div>



        //         <div class="card lg:card-side bg-base-100 shadow-xl">
        //   <figure><img src={img} alt="Album"/></figure>
        //   <div class="card-body">
        //     <h2 class="card-title">{name}</h2>
        //     <p>{description}</p>

        //     {minimumOrderError}
        //   <input className='text-primary'  type="text" onChange={minimumOrderValue} name='minimumOrder' placeholder={minimumOrder} />




        //     <div class="card-actions justify-end">
        //       <button class="btn btn-primary">Pay</button>
        //     </div>
        //   </div>
        // </div>
    );
};

export default Purchase;