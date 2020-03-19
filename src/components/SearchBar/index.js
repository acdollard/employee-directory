import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          
          <input
            
            value={props.search}
            onChange={props.handleInputChange}
            name="breed"
            list="breeds"
            type="text"
            className="form-control"
            placeholder="Who are you looking for?"
            id="breed"
          />

            
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-danger">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;