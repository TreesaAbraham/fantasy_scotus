import React from 'react';
import { FiSearch } from 'react-icons/fi';

/* Dumb header – styles live in CSS */
export default function SearchResultsHeader() {
  return (
    <div className="search-results">
      <FiSearch className="search-results__icon" aria-hidden="true" />
      <span className="search-results__text">Search Results</span>
    </div>
  );
}
