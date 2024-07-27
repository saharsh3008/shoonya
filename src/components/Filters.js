import React, { useState } from 'react';

const Filters = ({ setFilters }) => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const applyFilters = () => {
    setFilters({ date, type });
  };

  return (
    <div className="filters">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Signature">Signature</option>
        <option value="Standalone">Standalone</option>
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
   

    <div className="search-filters-container">
    <input
    className="search-input"
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>
    </div>
  );
};

export default Filters;

