import React from "react";
import TodoItem from "./TodoItem";


function TodoBoard (props){
    
    // console.log('todoboard',props.todolist)

    return (
        <div>
            <p>todolist</p>
           {props.todolist.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}
export default TodoBoard