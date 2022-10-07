import React from 'react'
import './FoodEnter.css'

const FoodEnter = (props) => {
  return (
    <div className="imgBox">
      <img className='talent' src={props.imgsrc} onClick={props.onClickImg}></img>
      <h1>{props.name}의 식단 보러가기</h1>
    </div>
  )
}

export default FoodEnter
