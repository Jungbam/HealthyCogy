import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { dbService } from '../../fbase'
import './YouCon.css'

const SLIDE_NUMBER_VALUE = 3
export default function YouCon() {
  const [videoArray, setVideoArray] = useState([])

  useEffect(() => {
    dbService.collection('Routin').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedRoutinArray = dataArray.filter((data) => {
        return data.routin === 'basic'
      })
      const resultArray = selectedRoutinArray.map((data) => {
        return data.url
      })
      console.log(resultArray)
      setVideoArray(resultArray)
    })
  }, [])

  const randomNums = []
  let count = 0
  for (let i = 0; count < SLIDE_NUMBER_VALUE; i++) {
    const randomNum = Math.floor(Math.random() * 4)
    if (!randomNums.includes(randomNum)) {
      randomNums.push(randomNum)
      count++
    } else {
    }
  }
  const resultArray = []
  for (let i of randomNums) {
    resultArray.push(videoArray[i])
  }
  console.log(resultArray)
  return (
    <div className="youtub-container">
      {resultArray.map((urlPath) => (
        <ReactPlayer
          key={Math.random()}
          className="youConPlayer"
          url={urlPath}
          height="450px"
          playing={true}
          muted={true}
          controls={true}
        />
      ))}
    </div>
  )
}
