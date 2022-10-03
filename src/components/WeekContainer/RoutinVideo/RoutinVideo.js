import React from 'react'
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const SLIDE_NUMBER_VALUE = 3
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
  const randomIndex = () => {
    const randomNums = []
    let count = 0
    for (let i = 0; count < SLIDE_NUMBER_VALUE; i++) {
      const randomNum = Math.floor(Math.random() * videoArray[routin1].length)
      if (!randomNums.includes(randomNum)) {
        randomNums.push(randomNum)
        count++
      } else {
      }
    }
    return randomNums
  }
  const randomNumArray = randomIndex()
  console.log(randomNumArray)
  const playArray = [...videoArray[routin1]]

  return (
    <Wrap>
      <h2> "데이터 받아서 팔" 추천 루틴 영상</h2>
      <Slider {...settings}>
        {playArray.map((urlPath) => (
          <ReactPlayer
            key={Math.random()}
            className="player"
            url={urlPath}
            width="90%"
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
  margin: 0 auto;
  width: 100%;
  object-fit: cover;
`
