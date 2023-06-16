import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center mx-auto w-1/3'>
            <p className='text-[#2878EB] text-[20px] font-semibold '>----{subHeading}----</p>
            <h4 className='text-1xl md:text-4xl uppercase border-y-4 my-8 p-2'>{heading}</h4>
        </div>
    );
};

export default SectionTitle;