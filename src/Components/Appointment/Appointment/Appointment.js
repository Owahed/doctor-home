import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    const handelDateChange=date=>{
        setSelectedDate(date);
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handelDateChange={handelDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
        </div>
    );
};

export default Appointment;