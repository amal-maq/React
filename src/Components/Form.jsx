import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [tripDetails, setTripDetails] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    numberOfPeople: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'startDate' && new Date(value) > new Date(tripDetails.endDate)) {
      alert("Start date cannot be after end date.");
      return;
    }
    
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tripDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Destination:
        <input
          type="text"
          name="destination"
          value={tripDetails.destination}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={tripDetails.startDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={tripDetails.endDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number of People:
        <input
          type="number"
          name="numberOfPeople"
          value={tripDetails.numberOfPeople}
          onChange={handleChange}
          min="1"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
