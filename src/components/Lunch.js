import React from "react";
import './TodoItem.css'

function Lunch (props){
    

    return(
        <div className="todoItem">
            {props.item}
        </div>
    )
}
export default Lunch