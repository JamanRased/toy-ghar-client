
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import './AddReview.css';

const AddReview = (star ) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://salty-lake-71645.herokuapp.com/review', data)
        .then(res =>{
           if(res.data.insertedId){
               alert("Successfully added a Review")
               reset();
           }
        })
    }
    console.log(watch("example"));
    return (
        <div className='add-review'>
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>  
            <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
               
                <input {...register("Rating", { required: true })} placeholder="Your Rating" />
                <input {...register("name")} placeholder="Enter Your Name" />
                <input type="text-area" {...register("details", { required: true })} placeholder="Write a Review" />
                {errors && <span>This field is required</span>} 
                <input className="bg-warning mb-5" type="submit" value='Send' />
            </form>
        </div>
    );
};

export default AddReview;