import React from 'react';
import BookingForm from './BookingForm';


//booking component is a wrapper for bookingform
const Booking = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>

    );
};

export default Booking;