import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Userrow from './Userrow';

const Users = () => {
    const {data :users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All users {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>

       
      </tr>
    </thead>
   
    <tbody>
     {users.map((user,index)=> <Userrow 
    key={user._id}
    user={user}
index={index}
refetch={refetch}
    ></Userrow>)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;