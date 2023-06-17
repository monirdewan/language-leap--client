import React from 'react';
import img from '../../../assets/whychose.jpg'
import { FaAccessibleIcon,FaRegLightbulb } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { TbAccessPoint } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

const WhyChose = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 space-x-4 items-center mb-24'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='px-2'>
                <h4 className='text-[#2878EB] font-bold'>WHY CHOOSE US</h4>
                <h2 className='text-4xl font-bold leading-normal my-4 text-[#120F2D]'>Amazing Courses to Learn Language Better</h2>
                <p className='text-gray-600'>We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>
                <div className='my-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <h4 className='flex items-center text-xl font-bold'><FaAccessibleIcon className='mr-4 text-2xl text-[#2878EB]'/> Skilled Teachers</h4>
                    <h4 className='flex items-center text-xl font-bold'><BsClockHistory className='mr-4 text-2xl text-[#2878EB]'/> Affordable Courses</h4>
                    <h4 className='flex items-center text-xl font-bold'><FaRegLightbulb className='mr-4 text-2xl text-[#2878EB]'/> Efficient & Flexible</h4>
                    <h4 className='flex items-center text-xl font-bold'><TbAccessPoint className='mr-4 text-2xl text-[#2878EB]'/> Lifetime Access</h4>
                </div>
                <button className='flex items-center rounded text-white font-semibold bg-[#2878EB] hover:bg-[#120F2D] px-4 py-2 ease-in '><BiUser className='mr-4 text-2xl text-white'/> View All Coursess</button>
            </div>
        </div>
    );
};

export default WhyChose;