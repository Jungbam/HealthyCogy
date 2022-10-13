import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { dbService } from '../../../../fbase'
import './MyPicture.css'

const MyPicture = ({ userObj, date }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
  const [videoArray, setVideoArray] = useState([])
  const [data, setData] = useState([])
  const [beforeWeekData, setBeforeWeekData] = useState([])
  const dayjsDateId = dayjs(date)
  const beforedateEl = dayjsDateId.add(-7, 'day')

  useEffect(() => {
    //실시간으로 DB에서 받아오기.
    dbService.collection('image').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedUserArray = dataArray.filter((data) => {
        return data.user === userId
      })
      const outputArray = selectedUserArray.filter((data) => {
        return data.date == dateId
      })
      const beforedate = beforedateEl.format('YY-MM-DD')
      const beforeweekArray = selectedUserArray.filter((data) => {
        return data.date == beforedate
      })
      const resultData = outputArray.map((data) => data.url)
      setData(resultData)
      const beforeWeekPictureData = beforeweekArray.map((data) => data.url)
      setBeforeWeekData(beforeWeekPictureData)
    })
  }, [userId, dateId])

  return (
    <div className="mypictureContainer">
      {beforeWeekData.length === 1 ? (
        <div>
          <h2>일주일 전 내모습</h2>
          <img className="mypicture" src={beforeWeekData} />
        </div>
      ) : (
        <div>
          <h2 className="dummyText">일주일 전 내 모습이 없어요.</h2>
          <img src="./Img/bodycheckbefore.png" className="dummyImg"></img>
        </div>
      )}
      {data.length === 1 ? (
        <div>
          <h2>오늘의 내모습</h2>
          <img className="mypicture" src={data} />
        </div>
      ) : (
        <div>
          <h2 className="dummyText">오늘의 당신의 뱃살을 올려주세요.</h2>
          <img src="./Img/bodycheckafter.png" className="dummyImg"></img>
        </div>
      )}
    </div>
  )
}

export default MyPicture
