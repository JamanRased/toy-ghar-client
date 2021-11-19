import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, Price, imageurl } = service;
    return (
        <div className="service pb-3">
            <img src={imageurl} alt="" />
            <h3>{name}</h3>
            <h5>Price: {Price}</h5>
            <Link to={`/booking/${_id}`}>
                <button className="btn border bg-black text-white">Buy NOW</button>
            </Link>
        </div>
    );
};

export default Service;