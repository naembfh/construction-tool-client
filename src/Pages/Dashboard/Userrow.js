import React from 'react';
import { toast } from 'react-toastify';

const Userrow = ({user,index,refetch}) => {
    const {email,role,name}=user;
    const makeAdmin=()=>{
fetch(`https://polar-shelf-77839.herokuapp.com/user/admin/${email}`,{
    method:"PUT",
    headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(res=>{
    if(res.status===403){
        toast('Failed to Add Admin')
    }
  return  res.json()
})
.then(data=>{
    if(data.modifiedCount>0){

       refetch()
    toast('Succesfully Admin Added')
     
    }
   
})
    }
    return (
        <tr>
        <th>{index+1}</th>
        <th>{name}</th>
        <td>{email}</td>
        <th>{role !=="admin" &&<button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make Admin</button>} </th>
        <td>Blue</td>
      </tr>
      
    );
};

export default Userrow;