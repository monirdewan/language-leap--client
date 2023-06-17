import React from 'react';

const InstructorCard = ({data}) => {
    const {name,image,email} = data;
    return (
        <div className="card w-full  p-4 md:p-4 md:m-4 bg-base-100 shadow-xl mx-auto">
            <figure><img  src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p>Instructor: {name}</p>
                <p>E$mail: {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;