import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { dbService } from '../../../../fbase'

const MyPicture = ({ userObj, date }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
  const [videoArray, setVideoArray] = useState([])
  const [data, setData] = useState([])
  // const [routinValue, setRoutinValue] = useState('')

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
      const resultArray = outputArray.map((data) => data.url)
      setData(resultArray)
    })
  }, [userId, dateId])

  return (
    <div>
      {data.map((url, index) => (
        <div className="imgBox" key={index}>
          <img className="mypicture" src={url} />
        </div>
      ))}
    </div>
  )
}

export default MyPicture
