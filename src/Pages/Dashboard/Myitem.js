import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Myitem = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItem] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`
        fetch(url,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
console.log(data)
                setMyItem(data)

            })

    }, [user])

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    myItems.map((myItem,index) =>
                        <tr>
                            <th>{index+1}</th>
                            <td>{myItem.name}</td>
                            <td>{myItem.totalOrder}</td>
                            <td>${myItem.totalPrice}</td>
                            <td>
                                {(myItem.totalPrice && !myItem.paid) && 
                            <Link to={`/dashboard/order/${myItem._id}`}  className='btn btn-sm btn-primary'><button>Pay</button></Link>}
                                {(myItem.totalPrice && myItem.paid) && 
                            <p className='text-success'>Paid</p>}
                            
                            </td>
                            <td><button className='btn btn-sm btn-primary'>Delete</button></td>
                        </tr>

                    )
                }
                <tbody>






                </tbody>
            </table>
        </div>
    );
};

export default Myitem;