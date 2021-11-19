import React, { useEffect, useState } from 'react'

const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://salty-lake-71645.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])

    return (
      <div>
        <h2 className='text-center p-4 m-3'>Client Review</h2>
        <div className="row review-container">
                {
                  review.map((review) =>(
                    <div key={review._id} className='col-md-2 '>
                      <div className='ps-2 review-details'>
                        
                        <h3>{review.name}</h3>
                        <p>{review.details}</p>
                      </div>
                    </div>
                ))}
            </div>
      </div>
    );
};
export default Review;