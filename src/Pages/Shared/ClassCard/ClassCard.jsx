import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({ data }) => {
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
                    <Link to='/dashboard/studenthome'><button className="btn btn-primary">Select Class</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;