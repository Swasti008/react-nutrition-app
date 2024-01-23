import React, { Component } from "react";
import Data from "./components/FoodData";
import "./App.css";
import Search from "./components/Search";
import FoodBox from "./components/FoodBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nutri: {
        Key: "",
        description: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      nutri: {
        Key: Date.now(),
        description: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Search input={this.handleInput} />
        {Data.filter((e) => {
          if (this.state.nutri.description === "") {
            return e; 
          } else if (
            e.name.toLowerCase().includes(this.state.nutri.description.toLowerCase())
          ) {
            return e;
          }
          return false;
        }).map((e) => (
          <div className="eachElement" key={e.id}>
            <FoodBox foodData={e} input={this.handleInput}/>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
