import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h1 className="testimonials-heading">Testimonials</h1>
            <h2 className="testimonials-subheading">What Our Customers Say</h2>
            <div className="testimonials-grid grid md:grid-cols-4">
                <div className="testimonial">
                <div className="rating mb-3">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
               </div>
                    <h3 className="name mb-3">John Doe</h3>
                    <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="testimonial">
                <div className="rating mb-3">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
               </div>
                    <h3 className="name mb-3">Jane Doe</h3>
                    <p className="testimonial-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="testimonial">
                <div className="rating mb-3">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
               </div>
                    <h3 className="name mb-3">Jane Doe</h3>
                    <p className="testimonial-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="testimonial">
                <div className="rating mb-3">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
               </div>
                    <h3 className="name mb-3">Jane Doe</h3>
                    <p className="testimonial-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
               
            </div>
        </div>
    );
}

export default Testimonials;
