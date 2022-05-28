import React, { useState } from 'react';

const ManageOrders = () => {
    const [orders,setOrders]=useState([]);
    fetch('https://polar-shelf-77839.herokuapp.com/allOrders')
    .then(res=>res.json())
    .then(data=>setOrders(data))
    return (
        <div>
           order :{orders.length}
        </div>
    );
};

export default ManageOrders;