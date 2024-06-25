//test file, 4 tests, run "npm test" then a for all tests should be 4/4 passed
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

// Test case 1: Renders the Header heading
test('Renders the Header heading', () => {
    // Render the App component wrapped in BrowserRouter
    render(<BrowserRouter><App /></BrowserRouter>);

    // Find the heading element with text "Reserve a Table"
    const headingElement = screen.getByText("Reserve a Table");

    // Assert that the heading element is in the document
    expect(headingElement).toBeInTheDocument();

    // Find the reserve button using its role
    const reserveButton = screen.getByRole("button", { name: /On Click/i });

    // Simulate a click on the reserve button
    fireEvent.click(reserveButton);

    // Find the new heading element after clicking the button
    const headingElementNew = screen.getByText("Choose Date");

    // Assert that the new heading element is in the document
    expect(headingElementNew).toBeInTheDocument();
});

// Test case 2: Initialize/Update Times
test('Initialize/Update Times', () => {
    // Mock available times array
    const availableTimes = ['12:00', '13:00', '14:00'];

    // Mock dispatch function
    const dispatch = jest.fn();

    // Mock submitForm function
    const submitForm = jest.fn();

    // Render the BookingForm component wrapped in BrowserRouter
    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </BrowserRouter>
    );

    // Verify that each time option is rendered correctly
    availableTimes.forEach(time => {
        expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });

    // Simulate selecting a time option
    userEvent.selectOptions(screen.getByLabelText(/choose time/i), '12:00');

    // Assert that the selected time option is correct
    expect(screen.getByRole('option', { name: '12:00' }).selected).toBe(true);
});

// Test case 3: Form submission
test('Form submission', () => {
    // Mock available times array
    const availableTimes = ['12:00', '13:00', '14:00'];

    // Mock dispatch function
    const dispatch = jest.fn();

    // Mock submitForm function
    const submitForm = jest.fn();

    // Render the BookingForm component wrapped in BrowserRouter
    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </BrowserRouter>
    );

    // Fill out the form fields
    userEvent.type(screen.getByLabelText(/choose date/i), '2024-06-30');
    userEvent.selectOptions(screen.getByLabelText(/choose time/i), '12:00');
    userEvent.type(screen.getByLabelText(/number of guests/i), '4');
    userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');

    // Simulate clicking the submit button
    userEvent.click(screen.getByRole('button', { name: /On Click/i }));

    // Verify that the submitForm function was called with the correct data
    expect(submitForm).toHaveBeenCalledWith({
        date: '2024-06-30',
        times: '12:00',
        guests: '4',
        occasion: 'Birthday',
    });
});

// Test case 4: Renders the Header component
test('Renders the Header component', () => {
    // Render the Header component wrapped in BrowserRouter
    render(<BrowserRouter><Header /></BrowserRouter>);

    // Find the heading element with text "Reserve a Table"
    const headingElement = screen.getByText("Reserve a Table");

    // Assert that the heading element is in the document
    expect(headingElement).toBeInTheDocument();
});
