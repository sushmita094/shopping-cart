import React from "react";

const SearchYear = ({ onSearchChange }) => {
  return (
    <div>
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputyear">Search Year</label>
          <input
            type="text"
            className="form-control"
            id="inputyear"
            placeholder="Type Here"
            onChange={(e) => onSearchChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchYear;
