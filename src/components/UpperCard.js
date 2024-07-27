import React from 'react';

const UpperCard = () => {
  return (
    <div className="upper-card">
      <img src="data:image/jpeg;base64,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" alt="Retreat Image" className="upper-card-image" />
      <div className="upper-card-content">
        <h2 className="upper-card-title">Welcome to Wellness Retreats</h2>
        <p className="upper-card-description">
          Discover a range of wellness retreats to help you relax, rejuvenate, and find peace.
        </p>
      </div>
    </div>
  );
};

export default UpperCard;
