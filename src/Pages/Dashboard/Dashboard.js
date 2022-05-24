
   
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    
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
                    <li><NavLink to="/dashboard">My Orders</NavLink></li>
                    <li><NavLink to="/dashboard/myOrder">Add A Review </NavLink></li>
                    <li><NavLink to="/dashboard/users">Users </NavLink></li>
                   
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;