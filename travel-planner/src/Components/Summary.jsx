import React from 'react';
import './summary.css';

const Summary = ({ tripDetails }) => {
  return (
    <div id="summary">
     
     <div id="sumcont">
        <h3>Destination: </h3><p>{tripDetails.destination}</p>
     </div>
      <div id="sumcont">
          <h3>Start Date: </h3><p>{tripDetails.startDate}</p>
      </div>
      <div id="sumcont">
          <h3>End Date: </h3><p>{tripDetails.endDate}</p>
      </div>
      <div id="sumcont">
          <h3>Number of People: </h3><p>{tripDetails.numberOfPeople}</p>
      </div>
      
    </div>
  );
};

export default Summary;
