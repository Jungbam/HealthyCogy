import React, { useState } from 'react'
import Chucheon from './Chucheon/Chucheon'
import HeadeLine from './HeadeLine/HeadeLine'
import Slider from '../Slide/Slider'
import YouCon from '../Youtoube/YouCon/YouCon'

import './Intro.css'

const Intro = (props) => {
  const [isTip, setIsTip] = useState(false)
  const plusBoxHandler = () => {
    console.log('hi')
    setIsTip(true)
  }
  const seo = 'https://www.tving.com/onboarding'
  const seo2 = './Img/rec.png'
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
          <h2>"맞춤 다이어트 플랫폼"</h2>
          <p>
            개인마다 다른 체형, 스타일, 식단을 오로지 자신에게 맞도록 헬시코기
            플랫폼을 통해 ..{' '}
          </p>
          <div className="chucheon-container">
            <Chucheon pageNum={seo} imgSet={seo2} />
            <Chucheon pageNum={seo} imgSet={seo2} />
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
    <div>
      <HeadeLine changePage={changePageHandler} />
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
