import React, { Component } from "react";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import EmployeeWrapper from "./components/EmployeeWrapper"
import API from "./utils/API"


class App extends Component {

  state = {
    results: [],
    dob: [],
    name: [],
    location: [],
    search: "",
  };


  componentDidMount() {
    this.searchEmployees();
  }



  searchEmployees = query => {
    const name = [];
    const dob = [];
    const location = [];
    const result = [];
    //runs API call and sets state for the entire response, also pulling out name and birthday as their own state keys
    API.search(query)
      .then(res => {
        console.log(res);
        res.data.results.forEach((person)=> {
         const fullName = `${person.name.first} ${person.name.last}`
         const birthday = person.dob.date
         const loc = `${person.location.city}, ${person.location.state}`
         name.push(fullName);
         dob.push(birthday);
         location.push(loc);
         result.push(person);
        })
        this.setState({ name:name, dob:dob, location:location, results:result})
       
        console.log(this.state.results)
                     })
      .catch(err => console.log(err))
  }


  sortByAge = (e) => {
    e.preventDefault();

    const {results} = this.state
    const sortedArray = results.sort((a,b) => {return new Date(a.dob.date) > new Date(b.dob.date)})
    console.log("sorted array", sortedArray);
    this.setState({
      results: sortedArray
    }, ()=>{console.log("state", this.state)});
  }


  handleInputChange = event => {
    this.setState({ search: event.target.value })
    
  };




  render() {
    return (
     <React.Fragment>

       <Title>Employee Directory</Title>
       <SearchBar 
       sortByAge={this.sortByAge}
       handleInputChange={this.handleInputChange}
       handleFilter={this.handleFilter}
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
