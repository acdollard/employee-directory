import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <button className="btn " name="y2o" onClick={props.sortByAge} >Sort Youngest to Oldest</button>
        <button className="btn btn-2" name="o2y" onClick={props.sortByAge}>Sort Oldest to Youngest</button>

        <div className="form-group">
          
          <input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Filter by Name"
          />

        </div>
      </form>
    );
  }
  
  export default SearchForm;