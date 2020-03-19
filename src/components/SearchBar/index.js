import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <button className="btn btn-primary" onClick={props.sortByAge} >Sort Youngest to Oldest</button>
        <button className="btn btn-secondary">Sort Oldest to Youngest</button>

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
          <datalist id="breeds">
            <option value="Filter by State" />
            <option value="Sort by Age" />
          </datalist>

            
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-danger">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;