import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const email = sessionStorage.getItem("email");

    useEffect(()=>{
        fetch(`https://salty-lake-71645.herokuapp.com/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = email;
        data.status = "pending";

        fetch("https://salty-lake-71645.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => console.log(result));
            console.log(data);
        };

    return (
        <div className='p-5'>
            <div className='booking-container'>
                <div className='detailes-Form'>
                    <img className='imagee w-50' src= {service.imageurl} alt = ''/>
                    <h4>Detailes Of : {service.name}</h4>
                    <h3>Price Of : {service.Price} Tk</h3>     
                </div>    
                <div className='order-form'>
                    <h3>Please Submit Your Order</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='name' {...register("name")} defaultValue={service?.name} placeholder='name' />     
                        <input type='email' {...register("email", { required: true })} placeholder="Email"  />
                        <input type='date' {...register("date", { required: true })} placeholder="Date"  />
                        <input type='number' {...register("number", { required: true })} defaultValue={service?.Price} placeholder="Price"  />
                
                        {errors && <span>This field is required</span>} 
                        <input className="bg-success mb-5" type="submit" value='Book'/>
                    </form> 
                </div>  
            </div>
        </div> 
    );
};

export default Booking;