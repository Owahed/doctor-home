import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import AppointmentFormEX from '../AppointmentForm/AppointmentFormEX/AppointmentFormEX';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen, setIsOpen]=useState(false);
    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-color">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p style={{color:'black'}}>{booking.totalSpace} SPACER AVAILABLE</p>
                    <button onClick={setIsOpen} className="btn btn-color">Book Appointment</button>
                    <AppointmentFormEX modalIsOpen={modalIsOpen} bookingSubject={booking.subject} date={date} closeModal={closeModal}></AppointmentFormEX>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;