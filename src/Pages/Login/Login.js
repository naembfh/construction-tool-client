import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';
import Purchase from '../Purchase';



const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token]=useToken(user,gUser)
    const navigate=useNavigate()
    let location = useLocation();
    
    let from = location.state?.from?.pathname || "/";

   
    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    let errorElement;
    if(error|| gError){
        errorElement= <p className='text-primary'><small>{error?.message || gError?.message }</small></p>
  }
  if(loading||gLoading){
      return <Loading></Loading>
  }
const onsubmit=data=>{
    signInWithEmailAndPassword(data.email,data.password)
}

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-primary">Login</h2>
                   <form onSubmit={handleSubmit(onsubmit)}>
                   <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
                          {...register("email", {
                            required: {
                                value: true,
                                message: 'Need email for Login'
                            },})}
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
                                message: 'Need password for Login'
                            }})}
                        />
                    </div>
                    <label class="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

             

                    </label>
                    {errorElement}
                   <input className='btn btn-primary w-full' type="submit" value='Login' />
                   <p className='text-sm'><span>New to Construction Tool? </span><Link className='text-primary' to='/signup'>Please Create Account First</Link></p>
                   </form>
                    
             
                    <div class="divider"></div> 
                    <button onClick={()=>signInWithGoogle()} className='btn '>Continue with Google</button>

                </div>
             

            </div>
        </div>
    );
};

export default Login;