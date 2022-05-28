import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const Myprofile = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

    const [user] = useAuthState(auth);
    const [token] = useToken(user)
    const onsubmit=data=>{
        const name=user.displayName;
        data.name=name;
        
        fetch(`https://polar-shelf-77839.herokuapp.com/user/${user?.email}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
body:JSON.stringify(data)
})
.then(res=>res.json())
.then(data=>{
    
    if(data.result.modifiedCount>0 || data.result.matchedCount===1){
        toast('Profile Updated')
    }
})
    }
    return (
        <div>
            <p>Name : {user.displayName}</p>
            <p>Email : {user.email}</p>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Education</span>
                    </label>
                    <input type="text" placeholder="Education" class="input input-bordered w-full max-w-xs" 
                    {...register('education')}
                    />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="City Or District" class="input input-bordered w-full max-w-xs"
                    {...register('location')}
                    />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" 
                    {...register('contact')}
                    />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">LinkedIn profile link</span>
                    </label>
                    <input type="text" placeholder="LinkedIn profile link" class="input input-bordered w-full max-w-xs" 
                    {...register('linkedIn')}
                    />
                </div>
                <input type="submit" className='btn btn-primary ' value="Update Profile" />
            </form>
        </div>
    );
};

export default Myprofile;