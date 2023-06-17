import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit, getValues, reset, watch, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const onSubmit = data => {
       
        if (data.password !== data.confirmPassword) {
            return 
        }

        createUser(data.email, data.password)
        .then(result =>{
            const newUser = result.user;
           
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                const userData = {name:data.name, email:data.email, image:data.photoURL}
                fetch('https://language-leap-server.vercel.app/users',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userData)
                })
                .then(res => res.json())
                .then(data =>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Account Created SuccessFull',
                        showConfirmButton: false,
                        timer: 2500
                      })
                })
                console.log("user Profile Updated")
                reset()
            })
            .catch(error=>{
                console.log(error.message)
            })
            console.log(newUser)
            setError(' ')
        })
        .catch(error =>{
            setError(error.message)
        })
        
    };

    
    return (
        <div className='w-1/3 mx-auto mt-24 mb-16'>
            <h2 className='text-4xl mb-16'>Sign Up</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold text-[16px]">Name</span>
                    </label>
                    <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <span className='text-red-600'>Name  is required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold text-[16px]">Email</span>
                    </label>
                    <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <span className='text-red-600'>Email  is required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold text-[16px]">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold text-[16px]">Password</span>
                    </label>
                    <input type="password" placeholder="Password" {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 16,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password?.type === 'required' && <p role="alert" className='text-red-600'>Password is required </p>}
                    {errors.password?.type === 'minLength' && <p role="alert" className='text-red-600'>Password should be minimum 6 chareacter </p>}
                    {errors.password?.type === 'maxLength' && <p role="alert" className='text-red-600'>Password should be maximum 20 chareacter </p>}
                    {errors.password?.type === 'pattern' && <p role="alert" className='text-red-600'>Password must have one UpperCase One LowerCase one digit and one special Character </p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold text-[16px]">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {watch("confirmPassword") !== watch("password") &&
                        getValues("confirmPassword") ? (
                        <p>password not match</p>
                    ) : null}
                </div>



                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-primary mt-4' value='Sign Up' type="submit" />
            </form>
            <p className='mt-4'>Already Have an Account! <Link to='/login' className='text-[#2878EB] font-semibold'>Login</Link></p>
            <SocialLogin></SocialLogin>
            <p className='text-red-600'>{error}</p>
        </div>
    );
};

export default SignUp;