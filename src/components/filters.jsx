import React from "react";

const Filters = ({ onFilterChange }) => {
  return (
    <form className="form-inline">
      <div className="form-group">
        <label htmlFor="filterForm">Choose Language</label>
        <select
          onChange={(e) => onFilterChange(e)}
          className="form-control"
          id="filterForm"
        >
          <option value="Any">Any</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;
