import React from "react";
import "./style.css";

import EmployeeCard from "../EmployeeCard"




function EmployeeWrapper(props) {

          return(
            <div className="EmployeeWrapper">
              <EmployeeCard 
              results={props.results}
              search={props.search}
              />
            </div>
          )


  }

export default EmployeeWrapper;