import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    let errorElement;
    if(error|| gError ||updateError){
        errorElement= <p className='text-primary'><small>{error?.message || gError?.message }</small></p>
  }
if(user||gUser){
    
}
  if(loading||gLoading ||updating){
    return <Loading></Loading>
}

    const onsubmit =async data=>{
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    return (
        <div className='flex h-screen justify-center items-center'>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-2xl text-primary">Login</h2>
               <form onSubmit={handleSubmit(onsubmit)}>
               <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input type="name" placeholder="Name" class="input input-bordered w-full max-w-xs"
                       {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                    />
                </div>
               <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>

                    </label>
                    <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
                       {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                    />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Password</span>

                    </label>
                    <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" 
                     {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    })}
                    />
                </div>
                <label class="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

         

                </label>
                {errorElement}
               <input className='btn btn-primary w-full' type="submit" value='Login' />
               <p className='text-sm'><span>Already have an Account? </span><Link className='text-primary' to='/login'>Please Login</Link></p>
               </form>
                
         
                <div class="divider"></div> 
                <button onClick={()=>signInWithGoogle()} className='btn '>Continue with Google</button>

            </div>
         

        </div>
    </div>
    );
};

export default Signup;