import React from 'react';
import '../App.css';

const RetreatCard = ({ retreat }) => {
  return (
    <div className="retreat-card">
      <div className="image-container">
        <img src={retreat.image} alt={retreat.title} className="retreat-image" />
      </div>
      <div className="retreat-content">
        <h2 className="retreat-title">{retreat.title}</h2>
        <p className="retreat-description">{retreat.description}</p>
        <div className="retreat-details">
          <p><strong>Date:</strong> {retreat.date}</p>
          <p><strong>Location:</strong> {retreat.location}</p>
          <p><strong>Price:</strong> ${retreat.price}</p>
        </div>
      </div>
    </div>
  );
};

export default RetreatCard;
