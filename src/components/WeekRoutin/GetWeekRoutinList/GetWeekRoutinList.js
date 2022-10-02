import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import classes from '../../GetData/GetData.module.css'
import { deleteDoc, doc } from '@firebase/firestore'
import { dbService } from '../../../fbase'
import EditModal from '../../GetData/EditModal/EditModal'

const GetWeekRoutinList = ({ userObj, date, setPage, shutDownHandler }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
  const dayNumber= dayjs(new Date(date)).get('day')
  const [data, setData] = useState([])
  // console.log(dayNumber)

  useEffect(() => {
    //실시간으로 DB에서 받아오기.
    dbService.collection('healthycogy').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
 
      const selectedUserArray = dataArray.filter((data) => {
        return data.user === userId
      })
      console.log(selectedUserArray)
      const outputArray = selectedUserArray.filter((data) => {
        console.log(data)
        return data.date == dateId
      })
      console.log(outputArray)
      setData(outputArray)
    })
  }, [date])

  const deleteHandler = async (docId) => {
    const ok = window.confirm('진짜로 지우게?')
    if (ok) {
      await dbService.collection('healthycogy').doc(docId.createdId).delete()
    }
  }

  const editCallHandler = async (docId) => {
    setPage(<EditModal editDoc={docId} shutDownHandler={shutDownHandler} />)
  }
  const dayArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  return (
    <div className={classes.dataBox}>
      {data.map((data) => (
        <div key={Math.random()}>
          <div onClick={deleteHandler.bind(null, data)}>
            {dayArray[dayNumber]} : {!data ?  '쉬는 날' : data.routin} 
          </div>
          <button onClick={editCallHandler.bind(null, data)}>수정</button>
        </div>
      ))}
    </div>
  ) //값은 data에 있음(console로 부르고 ) 캘린더 날짜를 받아와 그 날짜에 맞는 값을 찍어라
}
export default GetWeekRoutinList
