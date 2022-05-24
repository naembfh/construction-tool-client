import React from 'react';
import { toast } from 'react-toastify';

const Userrow = ({user,index,refetch}) => {
    const {email,role}=user;
    const makeAdmin=()=>{
fetch(`http://localhost:5000/user/admin/${email}`,{
    method:"PUT",
    headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(res=>res.json())
.then(data=>{
    refetch()
    toast('Admin Added')
   
})
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <th>{role !=="admin" &&<button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make Admin</button>} </th>
        <td>Blue</td>
      </tr>
      
    );
};

export default Userrow;