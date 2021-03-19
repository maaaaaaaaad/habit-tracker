import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  increment = (data) => {
    this.props.onIncrement(data);
  };

  decrement = (data) => {
    this.props.onDecrement(data);
  };

  delete = (data) => {
    this.props.onDelete(data);
  };
  // const habitArr = this.state.habits.filter((item) => {
  //   item.id !== data.id;
  //   this.setState({habits : habitArr})
  // })
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habitArray={habit}
              onIncrement={this.increment} //habit인자가 모두 들어간 상태
              onDecrement={this.decrement} //habit인자가 모두 들어간 상태
              onDelete={this.delete} //habit인자가 모두 들어간 상태
            ></Habit>
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
