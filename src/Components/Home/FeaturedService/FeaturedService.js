import React from 'react';
import featured from '../../../images/Mask Group 3.png'

const FeaturedService = () => {
    return (
        <div>
            <section className="pb-0 pb-md-5 my-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0">
                            <img style={{height:"550px"}} src={featured} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h1>Exceptional Dental Cate,</h1>
                            <p className="text-secondary my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quo in eligendi optio rem quaerat, aut, magni modi non sint ipsam accusamus nisi doloremque. Sit, laboriosam. Ullam saepe officiis accusamus, vitae quis, assumenda, totam rem ab magni aliquam repellendus illum.</p>
                            <button className="btn btn-color">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedService;