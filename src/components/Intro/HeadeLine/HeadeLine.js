import React from 'react'
import Food from '../../Food/Food'
import BMI from '../../BMI/BMI'
import './HeadeLine.css'
import HeadeLineList from './HeadLineList/HeadLineList'

const HeadeLine = (props) => {
  const onClickedBMIHandler = (e) => {
    const BMIPage = <BMI />
    props.changePage(BMIPage)
  } //BMI 계산기 페이지 추가
  const onClickedAboutHandler = (e) => {
    const AboutPage = <p>This is about</p>
    props.changePage(AboutPage)
  }
  const onClickedFoodHandler = (e) => {
    const FoodPage = <Food />

    props.changePage(FoodPage)
  }
  const onClickedExHandler = (e) => {
    const ExPage = <p>This is Ex</p>

    props.changePage(ExPage)
  }
  const onClickedMyPageHandler = (e) => {
    const MyPage = <p>This is Mine</p>
    props.changePage(MyPage)
  }
  return (
    <div className="headerDiv">
      <div id="page_logo">
        <a href="index.html">헬시코기</a>
      </div>
      <nav>
        <ul>
          <HeadeLineList listname="BMI계산기" onClicked={onClickedBMIHandler} />
          <HeadeLineList
            listname="식단 추천"
            onClicked={onClickedFoodHandler}
          />
          <HeadeLineList listname="운동 추천" onClicked={onClickedExHandler} />
          <HeadeLineList
            listname="My Storage"
            onClicked={onClickedMyPageHandler}
          />
          <HeadeLineList listname="LOGIN" />
        </ul>
      </nav>
    </div>
  )
}
export default HeadeLine
