import React from 'react';
import logo from '../../../assets/flogo.png';
import { FaFacebook, FaInstagram, FaRegMap } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { TbBrandTwitter, TbPhonePause } from 'react-icons/tb';
import { SlSocialFacebook } from 'react-icons/sl';
import { CiYoutube } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='bg-[#120F2D] text-white p-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
                <div>
                    <div>
                        <img className='text-2xl font-semibold my-8' src={logo} alt="" />
                        <p>Language Leap Language Learning Institute<br />Your passport to fluent communication in multiple languages.</p>
                        
                    </div>
                </div>
                <div>
                    <h4 className='text-2xl font-semibold my-10'>Our Address</h4>
                    <div className='mt-4 '>
                            <div className='flex items-center gap-4 mb-2'><span className='text-3xl text-[#FF6799]'><FaRegMap /></span> <p className='text-lg'>Addresss: 15 Timber Ridge Road, USA</p></div>
                            <div className='flex items-center gap-4 mb-2'><span className='text-3xl text-[#FF6799]'><FiMail /></span> <p className='text-lg'>Email: hello@example.com</p></div>
                            <div className='flex items-center gap-4 mb-2'><span className='text-3xl text-[#FF6799]'><TbPhonePause /></span> <p className='text-lg'>Phone: (012) 345 6789</p></div>
                        </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h4 className='text-2xl font-semibold my-8'>Useful Link</h4>
                    <Link className='text-lg' to='/'>Home</Link>
                    <Link className='text-lg' to='/instructors'>Instructors</Link>
                    <Link className='text-lg' to='/classes'>classes</Link>
                    <Link className='text-lg' to='/login'>Login</Link>
                    <Link className='text-lg' to='/signup'>Sign Up</Link>
                </div>
                <div>
                    <h4 className='text-2xl font-semibold my-10'>Follow us</h4>
                    <a href="https://web.facebook.com/" className="link link-hover flex items-center text-lg mb-2"><SlSocialFacebook className='mr-4 text-[#FF6799] text-2xl' /> Facebook</a>
                    <a href="https://twitter.com/" className="link link-hover flex items-center text-lg mb-2"><TbBrandTwitter className='mr-4 text-[#FF6799] text-2xl' /> Twitter</a>
                    <a href='https://www.instagram.com/' className="link link-hover flex items-center text-lg mb-2"><FaInstagram className='mr-4 text-[#FF6799] text-2xl' />Instagram</a>
                    <a href='https://www.youtube.com/' className="link link-hover flex items-center text-lg mb-2"><CiYoutube className='mr-4 text-[#FF6799] text-2xl' />Youtube</a>
                </div>
            </div>
            <p className='text-center mt-16'>&copy;  2023 Language Leap. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;