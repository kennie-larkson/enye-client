import React from "react";

const Paginate = ({ profilesPerPage, totalProfiles, paginate }) => {
  const pageNumbers = [];

  for (
    let index = 0;
    index <= Math.ceil(totalProfiles / profilesPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <ul className="pagination ">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Paginate;
