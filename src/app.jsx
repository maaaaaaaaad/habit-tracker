import React, { Component } from "react";
import Habits from "./components/habits";
import "./app.css";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      // { id: 1, name: "Reading", count: 0 },
      // { id: 2, name: "Running", count: 0 },
      // { id: 3, name: "Coding", count: 0 },
    ],
  };
  increment = (data) => {
    const habitArray = [...this.state.habits];
    const index = habitArray.indexOf(data);
    habitArray[index].count++;
    this.setState({ habits: habitArray });
  };

  decrement = (data) => {
    const habitArray = [...this.state.habits];
    const index = habitArray.indexOf(data);
    const countDecrement = habitArray[index].count - 1;
    habitArray[index].count = countDecrement < 0 ? 0 : countDecrement;
    this.setState({ habits: habitArray });
  };

  delete = (data) => {
    if (window.confirm(`Did you serious?`)) {
      const habitArray = [...this.state.habits];
      const index = habitArray.indexOf(data);
      habitArray.splice(index, 1);
      this.setState({ habits: habitArray });
    } else {
      return;
    }
  };
  // const habitArr = this.state.habits.filter((item) => {
  //   return item.id !== data.id;
  // })
  //   this.setState({habits : habitArr})
  handleAdd = (name) => {
    const habitArray = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: habitArray });
  };

  handleReset = () => {
    if (window.confirm("Are you sure?")) {
      const habitArray = this.state.habits.map((item) => {
        item.count = 0;
        return item;
      });
      this.setState({ habits: habitArray });
    } else {
      return;
    }
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onDelete={this.delete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
