import React from 'react';
import doctor from '../../../images/5790-removebg.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <div>
            <section className="make-appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-none d-md-block">
                            <img src={doctor} alt=""/>
                        </div>
                        <div className="col-md-7 appointment-details py-5">
                            <h5 style={{color:" #1CC7C1"}}>APPOINTMENT</h5>
                            <h1 className="my-4">Make an Appointment</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima nam, eius aut similique quaerat.</p>
                            <button  className="btn btn-color">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppointment;