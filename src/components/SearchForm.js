// SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} class="search-form">
      <input class="search-box" type="text" placeholder="Enter city..." value={city} onChange={handleInputChange}/>
    </form>
  );
};

export default SearchForm;
