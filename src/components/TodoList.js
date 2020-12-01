// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "../components/Todo.js"

const TodoList = props => {

    return(
        <div className = "all-items">
        <div className = "list-items">
            {props.list.map(item =>(
                <Todo key = {item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
        </div>
            <button className = "btn" onClick={props.clearDone}>
                Completed 
            </button>
            {/* <button className = "btn" onClick={props.didIt}>
                Did It List
            </button> */}
        
        </div>
    );
};

export default TodoList;