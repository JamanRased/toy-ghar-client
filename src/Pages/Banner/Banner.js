import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className='pb-5 mb-5'>
            <Carousel>
                <Carousel.Item>
                <Carousel.Caption>
                    <div className='p-5 m-5 bg-warning text-black border-primary' >
                        <h1 className='mb-5 pb-5'>For Baby Hapiness</h1>
                        <h3>Family's Peaceful</h3>
                        <Link to="/services"><button className='p-3 bg-success text-white' >Buy Now</button></Link>
                    </div>
                </Carousel.Caption>
                <Image src="https://i.ibb.co/JnskcrJ/banner1.jpg" className=' w-100'alt="First Slide" />     
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption>
                    <div className='p-5 m-5 bg-warning text-black border-primary' >
                        <h1 className='mb-5 pb-5'>For Family Hapiness</h1>
                        <h3>Family's Peaceful</h3>
                        <Link to="/services"><button className='p-3 m-3 bg-success text-white' >Buy Now</button></Link>
                    </div>
                </Carousel.Caption>
                <Image src="https://i.ibb.co/dGJW7Q6/banner2.jpg" className=' w-100'alt="Second Slide" />     
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;