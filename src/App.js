import React, { Component } from "react";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import EmployeeWrapper from "./components/EmployeeWrapper"
import API from "./utils/API"


class App extends Component {

  state = {
    results: [],
    dob: "",
    name: "",
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


  sortByAge = () => {

    const {results} = this.state
    const SortedArray = results.sort((a,b) => {return a.dob.date > b.dob.date})
    console.log(SortedArray);
    this.setState({
      results: SortedArray
    });
 
  }





  render() {
    return (
     <React.Fragment>

       <Title>Employee Directory</Title>
       <SearchBar sortByAge={this.sortByAge}  />
       <EmployeeWrapper results={this.state.results} />
     </React.Fragment>

    );
  }
}

export default App;
