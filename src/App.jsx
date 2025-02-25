// src/App.jsx
import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Summary from './Components/Summary';

const App = () => {
  const [tripDetails, setTripDetails] = useState(null);

  const handleFormSubmit = (details) => {
    setTripDetails(details);
  };

  return (
    <div>
      <Header />
      <section id="form">
        <Form onSubmit={handleFormSubmit} />
      </section>
      {tripDetails && (
        <section id="summary">
          <Summary tripDetails={tripDetails} />
        </section>
      )}
    </div>
  );
};

export default App;
