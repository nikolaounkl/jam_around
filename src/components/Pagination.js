import React from 'react';
import { Link } from "react-router-dom";

const Pagination = ({ songsPerPage, totalSongs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link to="/songs" className="pagination-link" onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
