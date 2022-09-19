import React, { useState } from 'react'
import Chucheon from './Chucheon/Chucheon'
import HeadeLine from './HeadeLine/HeadeLine'
import Slider from '../Slide/Slider'
import YouCon from '../Youtoube/YouCon/YouCon'

import './Intro.css'
const Intro = (props) => {
  const seo = 'https://www.tving.com/onboarding'
  const seo2 = './Img/rec.png'
  const [mainPage, setPage] = useState(
    <main>
      <div id="backgroundImg">
        <div className="background-Img"></div>
      </div>

      <ul className="chucheon-container">
        <div>
          <h1>다이어트 동기부여</h1>
          <div className="chucheon-container">
            <Chucheon pageNum={seo} imgSet={seo2} />
            <Chucheon pageNum={seo} imgSet={seo2} />
          </div>
        </div>
        <Slider />
      </ul>
      <div>
        <div id="section3">
          <span>다이어트에 대한 정보/꿀팁</span>
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
      <main>{mainPage}</main>
    </div>
  )
}
export default Intro
