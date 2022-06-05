import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DeleteMyItemModal from './DeleteMyItemModal';

const Myitem = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems, setMyItem] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`
        fetch(url, {
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
    const deleteOrder = (id, myItem) => {

        console.log(id, myItem)
        if (!myItem.transactionId) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                   
                   if(data.deletedCount>0){
                       toast('Sucessfully deleted Item')
                    //  window.location.reload()
                    
                   }

                })

        }else{
            return toast('Item Paid Already ,Can not Delete!!')
        }



    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        {/* <th>Transacition ID</th> */}
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    myItems.map((myItem, index) =>
                
                        <tr>
                            <th>{index + 1}</th>
                            <td>{myItem.name}</td>
                            <td>{myItem.totalOrder}</td>
                            <td>${myItem.totalPrice} </td>
                            {/* <td>{myItem.transactionId}</td> */}
                            <td>
                                {(myItem.totalPrice && !myItem.paid) &&
                                    <Link to={`/dashboard/order/${myItem._id}`} className='btn btn-sm btn-primary'><button>Pay</button></Link>}
                                {(myItem.totalPrice && myItem.paid) &&
                                    <div>
                                        <p className='text-success'>Paid</p>
                                        <span>Transaction Id Is:</span>
                                        <p>{myItem.transactionId}</p>

                                    </div>
                                }

                            </td>
                            <td>
                                {/* <button onClick={() => deleteOrder(myItem._id, myItem)} className='btn btn-sm btn-primary'>Delete</button> */}
                            {myItem && <DeleteMyItemModal
                            myItem={myItem}
                            deleteOrder={deleteOrder}
                            ></DeleteMyItemModal>}    <label for="my-modal-6" className='btn btn-sm btn-primary'>Delete</label>
                                
                                </td>
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