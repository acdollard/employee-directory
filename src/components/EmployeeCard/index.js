import React from "react";
import "./style.css";
import Moment from 'moment';

function EmployeeCard(props) {

  return (
    props.results.map(result => (

    <div className="card"
          key={result.id.value}>
      <div className="img-container">
        <img alt={result.name} src={result.picture.large} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {`${result.name.first} ${result.name.last}`}
          </li>
          <li>
            <strong>Email:</strong> {result.email}
          </li>
          <li>
            <strong>Phone:</strong> {result.phone}
          </li>
          <li>
            <strong>DOB:</strong> {Moment(result.dob.date).format(`MM-DD-YYYY`)}
          </li>
          <li>
            <strong>Location:</strong> {`${result.location.city}, ${result.location.state}`}
          </li>
        </ul>
      </div>
    </div>

    ))
  );
}

export default EmployeeCard;
