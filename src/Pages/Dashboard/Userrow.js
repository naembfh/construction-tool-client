import React from 'react';
import { toast } from 'react-toastify';

const Userrow = ({user,index,refetch}) => {
    const {email,role,name}=user;
    console.log(user)
    const makeAdmin=()=>{
fetch(`http://localhost:5000/user/admin/${email}`,{
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
       
      </tr>
      
    );
};

export default Userrow;