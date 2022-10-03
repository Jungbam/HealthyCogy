import React from "react";
import './TodoItem.css'

function TodoItem (props){

    return(
        <div className="todoItem">
            {props.item}
        </div>
    )
}
export default TodoItem