import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div >
            <div className='text-center p-5 mt-5'>
                <h2 className='pt-5 mt-2'>About Us ToyGhar BD</h2>
                <p className='pt-4'>Childhood is the most colorful of all seasons. ToyGhor takes part in a kid's journey via colorful and cute imagination.</p>
                <Link to="/services"><button className='p-2 bg-success text-white' >Purchase Now</button></Link>
            </div>   
        </div>
    );
};

export default About;