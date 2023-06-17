import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin =()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            const userData = {name:loggedUser.displayName, email:loggedUser.email, image:loggedUser.photoURL}
                fetch('https://language-leap-server.vercel.app/users',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userData)
                })
                .then(res => res.json())
                .then(data =>{
                    navigate(from, {replace:true})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Google Login  SuccessFull',
                        showConfirmButton: false,
                        timer: 2500
                      })
                })
        })
    }
    return (
        <div>
            <div className="divider"></div> 
            <button className='flex items-center btn bg-[#acc9f3]' onClick={handleGoogleLogin}><FcGoogle className='text-xl' /><span className='ml-2'>SignIn with Google</span></button>
        </div>
    );
};

export default SocialLogin;