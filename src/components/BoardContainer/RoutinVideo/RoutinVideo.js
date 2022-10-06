import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import { dbService } from '../../../fbase'

import './RoutinVideo.css'
import dayjs from 'dayjs'

// const SLIDE_NUMBER_VALUE = 4
const RoutinVideo = ({ userObj, date }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
  const [videoArray, setVideoArray] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    //실시간으로 DB에서 받아오기.
    dbService.collection('healthycogy').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedUserArray = dataArray.filter((data) => {
        return data.user === userId
      })
      const outputArray = selectedUserArray.filter((data) => {
        return data.date == dateId
      })
      setData(outputArray)
      const routinValue = { ...outputArray[0] }
      getroutinVideo(routinValue.routin)
    })
  }, [userId, dateId])

  const getroutinVideo = async (routinInput) => {
    await dbService.collection('Routin').onSnapshot((snapshot) => {
      const routinValue = routinInput
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedRoutinArray = dataArray.filter((data) => {
        return data.routin === routinValue
      })
      const resultArray = selectedRoutinArray.map((data) => {
        return data.url
      })
      setVideoArray(resultArray)
    })
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

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
  // const playArray = [...videoArray[routinValue]]
  // const resultArray = []
  // for (let i of randomNumArray) {
  //   resultArray.push(playArray[i])
  // }

  return (
    <div className="RoutinVideoContainer">
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
    </div>
  )
}
export default RoutinVideo
