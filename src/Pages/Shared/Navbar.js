import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut} from 'firebase/auth';


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut=()=>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  

   const menu =<>
             <li><NavLink to='/'>Home</NavLink></li>
            {user ? <li><button onClick={logOut}>Sign Out</button> <p className='uppercase border-2'>{user?.displayName}</p></li> : <li><NavLink to='/login'>Login</NavLink></li>}
            {
              user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            } 
             
             
        
   </>
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl text-primary">CONSTRUCTION TOOL</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
     {menu}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;