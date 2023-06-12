import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center mx-auto w-1/3'>
            <p className='text-[#2878EB]'>----{subHeading}----</p>
            <h4 className='text-5xl uppercase border-y-4'>{heading}</h4>
        </div>
    );
};

export default SectionTitle;