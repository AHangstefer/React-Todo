import React from 'react';
import ReactDom from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
//import "./Todo.css"

const list = [
  {
  name:"Wash Hair",
  id:0,
  completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      list //
    };
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };


  clearDone = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change
  // handlers you need to work with your state


  render() {
    return (
      <div className= "App">
        <h2 className = "Header">Welcome to your Todo App!</h2>
        <TodoForm addItem = {this.addItem} />
        <TodoList
          list= {this.state.list}
          toggleItem = {this.toggleItem}
          clearDone = {this.clearDone}
        />
      </div>
    );
  }
}

export default App;
