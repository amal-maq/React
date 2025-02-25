import React from 'react';

const Summary = ({ tripDetails }) => {
  return (
    <div id="summary">
      <h2>Trip Summary</h2>
      <p>Destination: {tripDetails.destination}</p>
      <p>Start Date: {tripDetails.startDate}</p>
      <p>End Date: {tripDetails.endDate}</p>
      <p>Number of People: {tripDetails.numberOfPeople}</p>
    </div>
  );
};

export default Summary;
