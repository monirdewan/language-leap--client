import React from 'react';

const InstructorCard = ({data}) => {
    const {cName,iName,cImage,aSeats,price} = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img  src={cImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cName}</h2>
                <p>Instructor: {iName}</p>
                <p>Available Seats: {aSeats}</p>
                <p>Price: ${price}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;