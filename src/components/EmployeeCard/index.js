import React from "react";
import "./style.css";

function EmployeeCard(props) {

  return (
    props.results.map(result => (

    <div className="card">
      <div className="img-container">
        <img alt={result.name} src={result.picture.large} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {result.name.first + result.name.last}
          </li>
          <li>
            <strong>Email:</strong> {result.email}
          </li>
          <li>
            <strong>Phone:</strong> {result.phone}
          </li>
        </ul>
      </div>
    </div>

    ))
  );
}

export default EmployeeCard;
