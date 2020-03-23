import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <button className="btn btn-primary" name="y2o" onClick={props.sortByAge} >Sort Youngest to Oldest</button>
        <button className="btn btn-secondary" name="o2y" onClick={props.sortByAge}>Sort Oldest to Youngest</button>

        <div className="form-group">
          
          <input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Search by Last Name"
          />


            
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-danger">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;