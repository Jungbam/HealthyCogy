import React, { useState } from 'react'
import FoodEnter from './FoodEnter/FoodEnter'
import styled from 'styled-components'
import './Food.css'

const Food = (props) => {
  const [mealImg, setMealImg] = useState(
    <img src="./Img/hungertext.JPG" id="hunger" />,
  )
  const onChangeHandler = (event) => {
    const howMeal = event.target.value
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
      setMealImg(<img src="./Img/hungertext.JPG" id="hunger" />)
    }
  }
  const onClickHandlerThree = () => {
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
        <FoodEnter imgsrc="./Img/suji.JPG" onClickImg={onClicksujiImgHandler} />
      </div>,
    )
  }
  const onClickHandlerFive = () => {
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
  }
  const onClickGangImgHandler = () => {
    setMealImg(
      <div className="flexBox">
        <img src="./Img/three.JPG" className="imgsic" />
        <div className="textBox">
          <h2>강소라의 다이어트 식단</h2>
          <div className="textCon">
            <h3 className="h3-tex">그녀만의 다이어트 규칙 3가지</h3>
            <h4 className="h4-tex">1. 야식 절대 금지</h4>
            <h4 className="h4-tex">2. 최대한 움직이기</h4>
            <h4 className="h4-tex">3. 아침, 점심, 저녁! 세 끼 먹기</h4>
          </div>
          <div className="textCon2">
            <h3 className="h4-tex">
              발레와 필라테스와 같은 운동들을 통한 부가효과 UP!
            </h3>
            <h3 className="h4-tex">호박죽을 통한 이뇨작용과 붓기제거!</h3>
            <h3 className="h4-tex">
              호박죽은 피부미용과 노화방지, 변비예방에도 특효약!
            </h3>
          </div>
          <Button onClick={onClickHandlerThree}>뒤로가기</Button>
        </div>
      </div>,
    )
  }
  const onClickapinkImgHandler = () => {
    setMealImg(
      <div className="flexBox">
        <img src="./Img/three-apink.JPG" className="imgsic" />
        <div className="textBox">
          <h2>강소라의 다이어트 식단</h2>
          <div className="textCon">
            <h3 className="h3-tex">그녀만의 다이어트 규칙 3가지</h3>
            <h4 className="h4-tex">1. 야식 절대 금지</h4>
            <h4 className="h4-tex">2. 최대한 움직이기</h4>
            <h4 className="h4-tex">3. 아침, 점심, 저녁! 세 끼 먹기</h4>
          </div>
          <div className="textCon2">
            <h3 className="h4-tex">
              발레와 필라테스와 같은 운동들을 통한 부가효과 UP!
            </h3>
            <h3 className="h4-tex">호박죽을 통한 이뇨작용과 붓기제거!</h3>
            <h3 className="h4-tex">
              호박죽은 피부미용과 노화방지, 변비예방에도 특효약!
            </h3>
          </div>
          <Button onClick={onClickHandlerThree}>뒤로가기</Button>
        </div>
      </div>,
    )
  }
  const onClicksujiImgHandler = () => {
    setMealImg(
      <div className="flexBox">
        <img src="./Img/three-suzy.JPG" className="imgsic" />
        <div className="textBox">
          <h2>강소라의 다이어트 식단</h2>
          <div className="textCon">
            <h3 className="h3-tex">그녀만의 다이어트 규칙 3가지</h3>
            <h4 className="h4-tex">1. 야식 절대 금지</h4>
            <h4 className="h4-tex">2. 최대한 움직이기</h4>
            <h4 className="h4-tex">3. 아침, 점심, 저녁! 세 끼 먹기</h4>
          </div>
          <div className="textCon2">
            <h3 className="h4-tex">
              발레와 필라테스와 같은 운동들을 통한 부가효과 UP!
            </h3>
            <h3 className="h4-tex">호박죽을 통한 이뇨작용과 붓기제거!</h3>
            <h3 className="h4-tex">
              호박죽은 피부미용과 노화방지, 변비예방에도 특효약!
            </h3>
          </div>
          <Button onClick={onClickHandlerThree}>뒤로가기</Button>
        </div>
      </div>,
    )
  }
  const onClickSinyoungImgHandler = () => {
    setMealImg(
      <div className="flexBox">
        <img src="./Img/five-sinyoung.JPG" className="imgsic" />
        <div className="textBox">
          <h2>강소라의 다이어트 식단</h2>
          <div className="textCon">
            <h3 className="h3-tex">그녀만의 다이어트 규칙 3가지</h3>
            <h4 className="h4-tex">1. 야식 절대 금지</h4>
            <h4 className="h4-tex">2. 최대한 움직이기</h4>
            <h4 className="h4-tex">3. 아침, 점심, 저녁! 세 끼 먹기</h4>
          </div>
          <div className="textCon2">
            <h3 className="h4-tex">
              발레와 필라테스와 같은 운동들을 통한 부가효과 UP!
            </h3>
            <h3 className="h4-tex">호박죽을 통한 이뇨작용과 붓기제거!</h3>
            <h3 className="h4-tex">
              호박죽은 피부미용과 노화방지, 변비예방에도 특효약!
            </h3>
          </div>
          <Button onClick={onClickHandlerFive}>뒤로가기</Button>
        </div>
      </div>,
    )
  }
  const onClickBoramkImgHandler = () => {
    setMealImg(
      <div className="flexBox">
        <img src="./Img/five-boram.JPG" className="imgsic" />
        <div className="textBox">
          <h2>강소라의 다이어트 식단</h2>
          <div className="textCon">
            <h3 className="h3-tex">그녀만의 다이어트 규칙 3가지</h3>
            <h4 className="h4-tex">1. 야식 절대 금지</h4>
            <h4 className="h4-tex">2. 최대한 움직이기</h4>
            <h4 className="h4-tex">3. 아침, 점심, 저녁! 세 끼 먹기</h4>
          </div>
          <div className="textCon2">
            <h3 className="h4-tex">
              발레와 필라테스와 같은 운동들을 통한 부가효과 UP!
            </h3>
            <h3 className="h4-tex">호박죽을 통한 이뇨작용과 붓기제거!</h3>
            <h3 className="h4-tex">
              호박죽은 피부미용과 노화방지, 변비예방에도 특효약!
            </h3>
          </div>
          <Button onClick={onClickHandlerFive}>뒤로가기</Button>
        </div>
      </div>,
    )
  }
  return (
    <div className="main-container">
      <div className="dd">
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
const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 4em 2em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`
