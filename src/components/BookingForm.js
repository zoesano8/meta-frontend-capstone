import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the submitForm function passed as a prop
        props.submitForm({ date, times, guests, occasion });
        // Reset form fields
        setDate("");
        setTimes("");
        setGuests("");
        setOccasion("");
    }

    // Handle date change
    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* for selecting date */}
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input
                                id='book-date'
                                value={date}
                                onChange={handleDateChange}
                                type='date'
                                required
                            />
                        </div>

                        {/* for selecting time */}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}
                                required
                            >
                                <option value="">Select a Time:</option>
                                {props.availableTimes.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>

                        {/* for number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input
                                id="book-guests"
                                min="1"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                type="number"
                                placeholder={0}
                                max={10}
                                required
                            />
                        </div>

                        {/* for identifying a special occasion */}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select
                                id="book-occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                            >
                                <option value="">Select an Option:</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>No special occasion</option>
                            </select>
                        </div>

                        {/* for submitting reservation request */}
                        <div className="btnReceive">
                            <input
                                aria-label="On Click"
                                type="submit"
                                value="Reserve Your Table"
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
