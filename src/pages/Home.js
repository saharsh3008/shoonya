import React, { useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import RetreatList from '../components/RetreatList';
import UpperCard from '../components/UpperCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';


const Home = () => {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Header />
      <UpperCard/>
      <Filters setFilters={setFilters} />
      <RetreatList filters={filters} searchQuery={searchQuery} />
      <Pagination/>
    </div>
  );
};

export default Home;

