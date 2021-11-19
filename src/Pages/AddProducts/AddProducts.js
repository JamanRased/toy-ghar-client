import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://salty-lake-71645.herokuapp.com/products', data)
        .then(res =>{
           if(res.data.insertedId){
               alert("Successfully added a Product")
               reset();
           }
        })
    }
    console.log(watch("example"));
    return (
        <div className="add-products">
            <h2>Add a Single Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>    
                <input {...register("name", { required: true,maxLength: 20 })} placeholder="Enter Your Product Name" />
                <input type="number" {...register("Price", { required: true })} placeholder="Price"  />
                <input {...register("imageurl", { required: true })} placeholder="image url"  />
        
                {errors && <span>This field is required</span>} 
                <input className="bg-success mb-5" type="submit" value='Add Product'/>
            </form>
        </div>
    );
};

export default AddProducts;