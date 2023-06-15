import React from 'react';

const ClassCard = ({ data }) => {
    const {name,instructorName,image,availableSeats,price,instructorEmail} = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img  src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor: {instructorName}</p>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;