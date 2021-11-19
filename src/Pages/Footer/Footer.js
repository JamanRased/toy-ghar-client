import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css';
import { faApplePay } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faApplePay} />
    return (
        <div>
            <div className='footer-container mt-5 p-5'>
                <div className='footer-area '>
                    <h2>ToyGhar BD </h2>
                    <h6>&copy; 2021. All rights reserved</h6>
                </div>
                <div className='pay-method'>
                    <h2>Pay With</h2>
                    <p className='display-4 text-primary'>{element1}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;