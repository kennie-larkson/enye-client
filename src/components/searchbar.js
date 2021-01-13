import React, { useState } from "react";

const SearchBar = ({  input, onChange }) => {
  return (
    <main>
      <nav className="navbar navbar-light bg-light">
        
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by name e.g Andrew young"
          aria-label="Search"
          value={input}
          onChange={(e) => onChange(e.target.value)}
        />
       
      </nav>
      
    </main>
  );
};

export default SearchBar;
