import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import SearchBar from "./components/SearchBar";
import EmployeeWrapper from "./components/EmployeeWrapper"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <SearchBar />
        <EmployeeWrapper />

      </Wrapper>
    );
  }
}

export default App;
