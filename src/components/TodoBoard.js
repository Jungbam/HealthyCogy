import React from "react";


function TodoBoard ({list}){
    // console.log(breakfastlist) [음식,음식]
    console.log(list)
   
    return (
        <div>
            <p>todolist</p>
           {list.map((item)=>(<div key={Math.random()}>
               <div>{item}</div> 
           </div>))}
        </div>
    )
}
export default TodoBoard

{/* <BreakFast item={item}/> */}