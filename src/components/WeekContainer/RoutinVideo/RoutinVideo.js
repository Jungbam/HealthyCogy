import React from 'react'
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const RoutinVideo = (routin) => {
  const routin1 = 'arm'
  // 루틴은 팔-하체-
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const videoArray = {
    arm: [
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
    ],
    chest: [
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
    ],
    back: [
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
    ],
    shoulder: [
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
    ],
    lowerbody: [
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
    ],
    aerobicexercise: [
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
      'https://www.youtube.com/watch?v=cIzEoosVsUg',
    ],
  }

  const playArray = [...videoArray[routin1]]
  console.log(playArray)
  return (
    <Wrap>
      <h2> "데이터 받아서 팔" 추천 루틴 영상</h2>
      <Slider {...settings}>
        {playArray.map((urlPath) => (
          <ReactPlayer
            key={Math.random()}
            className="player"
            url={urlPath}
            width="450px"
            heigth="400px"
            playing={true}
            muted={true}
            controls={true}
          />
        ))}
        <ReactPlayer />
      </Slider>
    </Wrap>
  )
}
export default RoutinVideo

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`
