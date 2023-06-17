import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='w-full'>
        <div className='grid grid-cols-2-1 items-center gap-12 justify-center'>
        <div >
        <img className='w-1/2 mx-auto' src={img} alt="" />
        </div>
        <div className='text-center'>
        <h4 className='text-4xl'>OPPS! PAGE NOTE FOUND</h4>
        <p>The page you are looking for might have been removed had its name changed or its temporarily unvaiable</p>
       <p className='mt-8'>Back to <Link className='py-2 px-4 bg-[#FF6799] text-white rounded' to='/'>Home</Link></p>
        </div>
        </div>
     </div>
    );
};

export default ErrorPage;