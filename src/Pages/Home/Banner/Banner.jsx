import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation,Autoplay } from 'swiper';
import { BiUser } from "react-icons/bi";
import './Banner.css'

import img1 from '../../../assets/slider/boys.jpg';
import img2 from '../../../assets/slider/online.jpg';
import img3 from '../../../assets/slider/instractor1.jpg';


const Banner = () => {
    return (
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative bannerbg'>
          <img src={img1} />
          <div className='bg-orange-200 absolute w-full h-full top-0 left-0 opacity-30'></div>
          <div className='absolute bottom-[30%] md:left-24 w-1/2 '>
            <h2 className='md:text-6xl sm:text-2xl text-xl font-bold text-[#120F2D] '>Learning A Language is Easier!</h2>
            <p className='text-[16px] font-semibold my-8'>Learning a language has become easier than ever before with the advent of online resources, language learning apps, and interactive platforms that provide personalized learning experiences.</p>
            <button className='flex items-center rounded text-white font-semibold bg-[#2878EB] hover:bg-[#120F2D] px-4 py-2 ease-in '><BiUser className='mr-4 text-2xl text-white'/>Join For Free</button>
          </div>
          </div>
          

        </SwiperSlide>
        <SwiperSlide>
        <div className='relative bannerbg'>
          <img src={img2} />
          <div className='bg-orange-200 absolute w-full h-full top-0 left-0 opacity-30'></div>
          <div className='absolute bottom-[30%] md:left-24 w-1/2 '>
            <h2 className='md:text-6xl sm:text-2xl text-xl font-bold text-[#120F2D]'>Learn New Language to Go Ahead for Your Career</h2>
            <p className='text-[16px] font-semibold my-8'>Learning a language has become easier than ever before with the advent of online resources, language learning apps, and interactive platforms that provide personalized learning experiences.</p>
            <button className='flex items-center rounded text-white font-semibold bg-[#2878EB] hover:bg-[#120F2D] px-4 py-2 ease-in '><BiUser className='mr-4 text-2xl text-white'/>Join For Free</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative bannerbg'>
          <img src={img3} />
          <div className='bg-orange-200 absolute w-full h-full top-0 left-0 opacity-30'></div>
          <div className='absolute bottom-[30%] md:left-24 w-1/2 '>
            <h2 className='md:text-6xl sm:text-2xl text-xl font-bold text-[#120F2D]'>A place where you can achieve your dream</h2>
            <p className='text-[16px] font-semibold my-8'>Learning a language has become easier than ever before with the advent of online resources, language learning apps, and interactive platforms that provide personalized learning experiences.</p>
            <button className='flex items-center rounded text-white font-semibold bg-[#2878EB] hover:bg-[#120F2D] px-4 py-2 ease-in '><BiUser className='mr-4 text-2xl text-white'/>Join For Free</button>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;