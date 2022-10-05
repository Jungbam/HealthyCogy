import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Chucheon from '../../components/Chucheon/Chucheon'
import Slider from '../../components/Slide/Slider'
import YouCon from '../../components/YouCon/YouCon'
import styled from 'styled-components'

import './Intro.css'

const Intro = (props) => {
  const [isTip, setIsTip] = useState(false)
  const plusBoxHandler = () => {
    setIsTip(true)
  }

  const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`
 
  const seo2 = './Img/120.jpg'
  const seo4 = './Img/Checklist.jpg'
  const seo1 = './Img/9kta_1h59_211101.jpg'
  const seo3 = '원하는 끼수를 정하면 유명 연예인 다이어트 식단을 볼 수 있어요!!'
  const seo5 = '매일 변하는 몸을 한눈에 보기 쉽게 사진으로 기록해봐요!'
  const seo6 = '식단, 운동 등 달력에 기록해봐요!'
  const sliderHandler = () => {
    setIsTip(false)
  }

  return (
    <div className="pBox">
      {/* <HeadeLine changePage={changePageHandler} isLoggedIn={props.isLoggedIn} /> */}
      <main>
      <div id="backgroundImg">
        <div className="background-Img"></div>
      </div>
      <ul className="content-container">
        <div>
          <h2 className="introH2">"맞춤 다이어트 플랫폼"</h2>
          <span className='info'>
            다이어트 성공의 가능성이 성공으로 꽃 피울 수 있도록 헬시코기가
            도와드립니다😀
          </span>
          {/* <p>
            개인마다 다른 체형, 스타일, 식단을 오로지 자신에게 맞도록 헬시코기
            플랫폼을 통해 ..{' '}
          </p> */}
          <div className="chucheon-container">
            <Chucheon  imgSet={seo2} text={seo3} />
            <Chucheon  imgSet={seo4} text={seo5} />
            <Chucheon  imgSet={seo1} text={seo6} />
          </div>
        </div>
      </ul>
      <div>
        <div id="section3">
          <h2 >다이어트에 대한 정보/꿀팁</h2>
          <YouCon />
        </div>
      </div>
        <div className="fixedContent">
          {isTip ? (
            <Slider onCLickFn={sliderHandler} />
          ) : (
            <div className="plusBox" onClick={plusBoxHandler}>
              ⭐️
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
export default Intro
