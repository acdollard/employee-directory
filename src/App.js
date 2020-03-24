import React, { Component } from "react";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import EmployeeWrapper from "./components/EmployeeWrapper"
import API from "./utils/API"


class App extends Component {

  state = {
    results: [],
    search: "",
  };


  componentDidMount() {
    this.searchEmployees();

  }

  //this function queries the employee API for the employee's data, then creates and adds a property "fullName"
  searchEmployees = query => {
    const result = [];

    API.search(query)
      .then(res => {
        console.log(res);
        res.data.results.forEach((person)=> {
         const fullName = `${person.name.first} ${person.name.last}`
         person.name.full_Name = fullName;
         result.push(person);
        })

        this.setState({results:result})
       
        console.log(this.state.results)
                     })
      .catch(err => console.log(err))
  }

  //a comparison function for youngest to oldest
  y_2_o(a, b, e) {
    // Use toUpperCase() to ignore character casing
      const personA = a.dob.date;
      const personB = b.dob.date;
      let comparison = 0;
      if (personA < personB) {
        comparison = 1;
      } else if (personA > personB) {
        comparison = -1;
      } 
      return comparison;
  }
  // comparison function for oldest to youngest
  o_2_y(a, b, e) {
    // Use toUpperCase() to ignore character casing
      const personA = a.dob.date;
      const personB = b.dob.date;
      let comparison = 0;
      if (personA > personB) {
        comparison = 1;
      } else if (personA < personB) {
        comparison = -1;
      } 
      return comparison;
  }

  sortByAge = (e) => {
    e.preventDefault();
   if(e.target.name==="o2y"){
      const {results} = this.state
      const sortedArray = results.sort(this.o_2_y)
      console.log("sorted array", sortedArray);
      this.setState({
        results: sortedArray
      }, ()=>{console.log("state", this.state)});
   } 
   else if (e.target.name==="y2o"){
      const {results} = this.state
      const sortedArray = results.sort(this.y_2_o)
      console.log("sorted array", sortedArray);
      this.setState({
        results: sortedArray
    }, ()=>{console.log("state", this.state)});
   }
  }



  handleInputChange = event => {
    this.setState({ search: event.target.value })
  };




  render() {
    return (
     <React.Fragment>

       <Title />
       <SearchBar 
       sortByAge={this.sortByAge}
       handleInputChange={this.handleInputChange}
       searchByEmployee={this.searchByEmployee}
       results={this.state.results}
       search={this.state.search}
       />
       <EmployeeWrapper 
          results={this.state.results}
          search={this.state.search}
        />
     </React.Fragment>

    );
  }
}

export default App;
