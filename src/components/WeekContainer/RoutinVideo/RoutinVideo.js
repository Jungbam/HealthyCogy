import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { dbService } from '../../../fbase'

// const SLIDE_NUMBER_VALUE = 4
const RoutinVideo = (routin) => {
  const [videoArray, setVideoArray] = useState([])
  const routin1 = 'aerobicexercise'
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  useEffect(() => {
    dbService.collection('Routin').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedRoutinArray = dataArray.filter((data) => {
        return data.routin === routin1
      })
      const resultArray = selectedRoutinArray.map((data) => {
        return data.url
      })
      setVideoArray(resultArray)
    })
  }, [routin])

  // const MaxRandom = videoArray1.length
  // const randomIndex = () => {
  //   const randomNums = []
  //   let count = 0
  //   for (let i = 0; count < SLIDE_NUMBER_VALUE; i++) {
  //     const randomNum = Math.floor(Math.random() * 7)
  //     if (!randomNums.includes(randomNum)) {
  //       randomNums.push(randomNum)
  //       count++
  //     } else {
  //     }
  //   }
  //   return randomNums
  // }
  // const randomNumArray = randomIndex()
  // const playArray = [...videoArray[routin1]]
  // const resultArray = []
  // for (let i of randomNumArray) {
  //   resultArray.push(playArray[i])
  // }

  return (
    <Wrap>
      <h2> 일일 추천 운동 영상</h2>
      <Slider {...settings}>
        {videoArray.map((urlPath) => (
          <ReactPlayer
            key={Math.random()}
            className="player"
            url={urlPath}
            width="90%"
            height="350px"
            playing={true}
            muted={true}
            controls={true}
          />
        ))}
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
