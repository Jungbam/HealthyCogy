import React from "react";
import Algorithm from "../Algorithm/Algorithm";
import ImgBoard from "../ImgBoard/ImgBoard";
import './BoardContainer.css'

const BoardContainer = () =>{
    return <div className="BoardContainer">
        <ImgBoard/>
        <Algorithm />
    </div>
}
export default BoardContainer