import React from "react";
import './Search.css';

export const Search = (props) => {
  return (
    <div>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Search Drivers"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          autoFocus
        />
      </form>
    </div>
  );
};
