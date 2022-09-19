import React, { useState } from 'react'
import './Food.css'

const Food = (props) => {
  const [mealImg, setMealImg] = useState('')
  const onChangeHandler = (event) => {
    const howMeal = event.target.value
    console.log(howMeal)
    if (howMeal === '2') {
      console.log('three')
      setMealImg('./Img/three.JPG')
    }
  }
  return (
    <div>
      <h1 id="main_title">식단 / 운동 추천</h1>
      <div>
        <form action=""></form>
        <label htmlFor="food-num">몇끼 먹을라우?</label>
        <select id="food-num" onChange={onChangeHandler}>
          <option value="1">2끼</option>
          <option value="2">3끼</option>
          <option value="3">5까</option>
        </select>
      </div>
      <section id="main_content">
        <img src={mealImg} className="img" />
      </section>
    </div>
  )
}
export default Food
