import React from "react";
import "./style.css";
import Moment from 'moment';
import { Container, Row, Col } from 'reactstrap';

function EmployeeCard({ results, search }) {

  const namesList = results
  .filter(name => {
    return (name.name.full_Name.toLowerCase().indexOf(search.toLowerCase()) >= 0 )
  }).map((result) => {
        return(
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
        )}
        )
    

  return (
    <Container className ="cardDiv">
      <Row className ="row">
      {namesList}

      </Row>
    </Container>
  );
}

export default EmployeeCard;
