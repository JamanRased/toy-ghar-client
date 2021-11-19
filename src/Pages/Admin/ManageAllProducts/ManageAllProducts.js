import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ManageAllOrder.css';

const ManageAllProducts = () => {
    const [events, setEvents] = useState([])
    useEffect(() =>{
        fetch('https://salty-lake-71645.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setEvents(data));
    },[])

    const handleDelet = id =>{
        const url = `https://salty-lake-71645.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert("Deleted Successfully");
                const remainingEvents = events.filter(event=> event._id !==id);
                setEvents(remainingEvents);
            }
        })
    }
    return (
        <div  className=''>
            <h2 className='p-3 m-3'>Manage all Products</h2>
            <div className='p-2 m-2'>
                {events.map((event) =>(
                    <div key = {event._id}className='row'>
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between border shadow bg-white rounded m-2 p-2">
                                <h4 className='ms-5 ps-3'> Tour : {event.name}</h4>
                                <Button className='p-2 my-auto' onClick={() => handleDelet(event._id)} variant="danger">Delet Event</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageAllProducts;