import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RetreatCard from './RetreatCard';

const RetreatList = ({ filters, searchQuery }) => {
  const [retreats, setRetreats] = useState([]);

  useEffect(() => {
    const fetchRetreats = async () => {
      let url = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

      if (filters.date) {
        url += `?date=${filters.date}`;
      } else if (filters.type) {
        url += `?type=${filters.type}`;
      } else if (searchQuery) {
        url += `?search=${searchQuery}`;
      }

      const response = await axios.get(url);
      setRetreats(response.data);
    };

    fetchRetreats();
  }, [filters, searchQuery]);

  return (
    <div className="retreat-list">
      {retreats.map((retreat) => (
        <RetreatCard key={retreat.id} retreat={retreat} />
      ))}
    </div>
  );
};

export default RetreatList;
