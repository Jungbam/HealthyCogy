import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import classes from '../../GetData/GetData.module.css'
import { dbService } from '../../../fbase'
import Dropdown from '../Dropdown/Dropdown'

const GetWeekRoutinList = ({ userObj, date }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
  const dayNumber = dayjs(new Date(date)).get('day')
  const [data, setData] = useState([])

  useEffect(() => {
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
    })
  }, [date])

  const dayArray = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]

  return (
    <div className={classes.dataBox}>
      {data.map((data) => (
        <div key={Math.random()}>
          <div>
            {dayArray[dayNumber]} : {!data ? '쉬는 날' : data.routin}
          </div>
          <Dropdown data={data} userId={userId} dateId={dateId} />
        </div>
      ))}
    </div>
  )
}
export default GetWeekRoutinList
