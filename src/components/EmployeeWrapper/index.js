import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
import EmployeeCard from "../EmployeeCard"



class EmployeeWrapper extends Component {
    state = {
        results: []
      };
    
      // When this component mounts, search the Giphy API for pictures of kittens
      componentDidMount() {
        this.searchEmployees();
      }
    
      searchEmployees = query => {
        API.search(query)
          .then(res => {
            this.setState({ results: res.data.results });
           
            console.log(this.state.results)
                         })
          .catch(err => console.log(err))
      }


      render() {
          return(
              <div>
                  <EmployeeCard results={this.state.results} />
              </div>
          )
      }


  }

export default EmployeeWrapper;