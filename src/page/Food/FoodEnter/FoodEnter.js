import React from 'react'
import './FoodEnter.css'

const FoodEnter = (props) => {
  return (
    <div className="imgBox">
      <img src={props.imgsrc} onClick={props.onClickImg}></img>
    </div>
  )
}

export default FoodEnter
