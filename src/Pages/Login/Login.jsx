import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {loginUser} = useContext(AuthContext)
    const [error, setError] = useState('');
    const onSubmit = data => {
        console.log(data)
        loginUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            setError('')
            navigate(from ,{replace:true})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login SuccessFull',
                showConfirmButton: false,
                timer: 2500
              })
        })
        .catch(error =>{
            setError(error.message)
        })
    };

    
    return (
        <div className='w-1/3 mx-auto my-24 '>
            <h2 className='text-4xl mb-16'>User Login</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Email</span>
                        </label>
                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Password</span>
                        </label>
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="input input-bordered w-full max-w-xs" />
                    </div>
                   
                   

                
                
                <input className='btn btn-primary mt-4' value='Login' type="submit" />
            </form>
            <p className='mt-4'>Don't have an Account? <Link className='text-[#2878EB] font-semibold' to='/signup'>Sign Up</Link></p>
            <SocialLogin></SocialLogin>
            <p className='text-red-600'>{error}</p>
        </div>
    );
};

export default Login;