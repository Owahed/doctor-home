import React from 'react';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {
    return (
        <div className="col-md-4   pt-5 ">
            <div className="testimonial">
            <div >
                <p style={{color:"black"}}>{testimonial.quote}</p>
            </div>
            <div className="d-flex mt-4">
                <div style={{marginRight:"20px"}}>
                <img style={{height:'50px'}} src={testimonial.img} alt=""/>
                </div>
                <div >
                <h4>{testimonial.name}</h4>
                <small>{testimonial.from}</small>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;