import React, { useState } from 'react'
import FoodEnter from '../FoodEnter/FoodEnter'
import './Food.css'

const Food = (props) => {
  const [mealImg, setMealImg] = useState('<div></div>')
  const onChangeHandler = (event) => {
    const howMeal = event.target.value
    console.log(howMeal)
    if (howMeal === '3') {
      setMealImg(
        <div className="enterContainer">
          <FoodEnter
            imgsrc="./Img/soragang.JPG"
            onClickImg={onClickGangImgHandler}
          />
          <FoodEnter
            imgsrc="./Img/apink.JPG"
            onClickImg={onClickapinkImgHandler}
          />
          <FoodEnter
            imgsrc="./Img/suji.JPG"
            onClickImg={onClicksujiImgHandler}
          />
        </div>,
      )
    } else if (howMeal === '4') {
      setMealImg(
        <div className="enterContainer">
          <FoodEnter
            imgsrc="./Img/sinyoung.JPG"
            onClickImg={onClickSinyoungImgHandler}
          />
          <FoodEnter
            imgsrc="./Img/boram.JPG"
            onClickImg={onClickBoramkImgHandler}
          />
        </div>,
      )
    } else {
      setMealImg('<div></div>')
    }
  }
  const onClickGangImgHandler = () => {
    setMealImg(<img src="./Img/three.JPG" className="imgsic" />)
  }
  const onClickapinkImgHandler = () => {
    setMealImg(<img src="./Img/three-apink.JPG" className="imgsic" />)
  }
  const onClicksujiImgHandler = () => {
    setMealImg(<img src="./Img/three-suzy.JPG" className="imgsic" />)
  }
  const onClickSinyoungImgHandler = () => {
    setMealImg(<img src="./Img/five-sinyoung.JPG" className="imgsic" />)
  }
  const onClickBoramkImgHandler = () => {
    setMealImg(<img src="./Img/five-boram.JPG" className="imgsic" />)
  }
  return (
    <div className="main-container">
      <div>
        <h1 className="main_title">연예인 다이어트 식단</h1>
        <label htmlFor="food-num">식사 횟수 선택 </label>
        <select id="food-num" onChange={onChangeHandler}>
          <option value="0">선택하세요.</option>
          <option value="3">3끼</option>
          <option value="4">5끼</option>
        </select>
      </div>
      <section className="imgContent">{mealImg}</section>
    </div>
  )
}
export default Food
