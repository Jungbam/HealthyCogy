import React, { useState } from 'react'
import Chucheon from '../../components/Chucheon/Chucheon'
import Slider from '../../components/Slide/Slider'
import YouCon from '../../components/YouCon/YouCon'

import './Intro.css'

const Intro = (props) => {
  const [isTip, setIsTip] = useState(false)
  const plusBoxHandler = () => {
    setIsTip(true)
  }
  const seo = 'https://www.tving.com/onboarding'
  const seo2 = './Img/120.jpg'
  const seo4 = './Img/Checklist.jpg'
  const seo1 = './Img/9kta_1h59_211101.jpg'
  const seo3 = '원하는 끼수를 정하면 유명 연예인 다이어트 식단을 볼 수 있어요!!'
  const seo5 = '변하는 인바디를 한눈에 보기 쉽게 기록해봐요!'
  const seo6 = '식단, 운동 등 달력에 체크리스트로 기록해봐요!'
  const sliderHandler = () => {
    setIsTip(false)
  }

  const [mainPage, setPage] = useState(
    <main>
      <div id="backgroundImg">
        <div className="background-Img"></div>
      </div>

      <ul className="content-container">
        <div>
          <h2 className="introH2">"맞춤 다이어트 플랫폼"</h2>
          <span>
            다이어트 성공의 가능성이 성공으로 꽃 피울 수 있도록 헬시코기가
            도와드립니다..
          </span>
          {/* <p>
            개인마다 다른 체형, 스타일, 식단을 오로지 자신에게 맞도록 헬시코기
            플랫폼을 통해 ..{' '}
          </p> */}
          <div className="chucheon-container">
            <Chucheon pageNum={seo} imgSet={seo2} text={seo3} />
            <Chucheon pageNum={seo} imgSet={seo4} text={seo5} />
            <Chucheon pageNum={seo} imgSet={seo1} text={seo6} />
          </div>
        </div>
      </ul>
      <div>
        <div id="section3">
          <h2>다이어트에 대한 정보/꿀팁</h2>
          <YouCon />
        </div>
      </div>
    </main>,
  )
  const changePageHandler = (newPage) => {
    setPage(newPage)
  }
  return (
    <div className="pBox">
      {/* <HeadeLine changePage={changePageHandler} isLoggedIn={props.isLoggedIn} /> */}
      <main>
        {mainPage}
        <div className="fixedContent">
          {isTip ? (
            <Slider onCLickFn={sliderHandler} />
          ) : (
            <div className="plusBox" onClick={plusBoxHandler}>
              꿀팁+
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
export default Intro
