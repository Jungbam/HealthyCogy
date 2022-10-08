import React from 'react'
import './FoodEnter.css'

const FoodEnter = (props) => {
  return (
    <div className="imgFoodBox" onClick={props.onClickImg}>
      {console.log(props.name)}
      <img className="talent" src={props.imgsrc}></img>
    </div>
  )
}

export default FoodEnter
