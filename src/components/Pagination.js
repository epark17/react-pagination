import React from 'react';

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber} className="page-item">
            <a href="!#" className="page-link">
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
