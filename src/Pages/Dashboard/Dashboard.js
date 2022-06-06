
   
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin]=useAdmin(user)
    
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-primary'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>{!admin && <NavLink to="/dashboard">My Orders</NavLink>}</li>
                    <li>{!admin && <NavLink to="/dashboard/myReview">Add A Review </NavLink>}</li>
                    <li> <NavLink to="/dashboard/myProfile">My Profile </NavLink></li>
                    <li>{admin && <NavLink to="/dashboard/users">Make Admin </NavLink>}</li>
                    <li>{admin && <NavLink to="/dashboard/addProduct">Add Product </NavLink>}</li>
                    <li>{admin && <NavLink to="/dashboard/manageOrder">Manage All Orders </NavLink>}</li>
                    <li>{admin && <NavLink to="/dashboard/manageProducts">Manage Products </NavLink>}</li>
                   
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;