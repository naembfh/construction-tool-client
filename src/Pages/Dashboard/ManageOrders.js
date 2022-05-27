import React, { useState } from 'react';

const ManageOrders = () => {
    const [orders,setOrders]=useState([]);
    fetch('http://localhost:5000/allOrders')
    .then(res=>res.json())
    .then(data=>setOrders(data))
    return (
        <div>
           order :{orders.length}
        </div>
    );
};

export default ManageOrders;