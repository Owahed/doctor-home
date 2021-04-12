import React from 'react';
import aliza from '../../../images/Ellipse 3.png'
import ema from '../../../images/Ellipse 2.png'
import wilson from '../../../images/Ellipse 1.png'
import Testimonial from '../Testimonial/Testimonial';


const testimonials =[
    {
        quote:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At sequi error ut ipsa ab itaque neque quis accusamus illo placeat, aliquam minima natus explicabo laboriosam.',
        name:'Aliza Harry',
        from: 'California',
        img:aliza
    },
    {
        quote:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At sequi error ut ipsa ab itaque neque quis accusamus illo placeat, aliquam minima natus explicabo laboriosam.',
        name:'Ema Harry',
        from: 'California',
        img:ema
    },
    {
        quote:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At sequi error ut ipsa ab itaque neque quis accusamus illo placeat, aliquam minima natus explicabo laboriosam.',
        name:'Wilson Harry',
        from: 'California',
        img:wilson
    }
]

const Testimonials = () => {
    return (
        <div>
            <section className="testimonials my-5 py-5">
                <div className="container">
                    <div className="section-header">
                        <h5 style={{color:" #1CC7C1"}} className="text-uppercase">Testimonial</h5>
                        <h1>What's Our Patients <br/>Says</h1>
                    </div>
                    <div className="card-deck mt-5 row">
                        {
                            testimonials.map(testimonial=><Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;