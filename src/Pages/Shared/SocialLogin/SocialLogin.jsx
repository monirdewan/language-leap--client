import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Providers/AuthProviders';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleLogin =()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            const userData = {name:loggedUser.displayName, email:loggedUser.email, image:loggedUser.photoURL}
                fetch('http://localhost:5000/users',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userData)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
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