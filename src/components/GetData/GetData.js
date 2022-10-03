import React, { useEffect, useState } from 'react'
import { dbService } from '../../fbase'
import dayjs from 'dayjs'
import classes from './GetData.module.css'
import EditModal from './EditModal/EditModal'
import { deleteDoc, doc } from '@firebase/firestore'

const GetData = ({ userObj, date, setPage, shutDownHandler }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
  const [data, setData] = useState([])
  
  console.log(data)
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

  return (
    <div className={classes.dataBox}>
      {data.map((data) => (
        <div key={Math.random()}>
          <div onClick={deleteHandler.bind(null, data)}>
            운동 :{data.routin} <br/>
            아침 : {data.breakfast} <br/> 
            점심 : {data.lunch} <br/>
            저녁 : {data.dinner}
          </div>
          <button onClick={editCallHandler.bind(null, data)}>수정</button>
        </div>
      ))}
    </div>
  ) //값은 data에 있음(console로 부르고 ) 캘린더 날짜를 받아와 그 날짜에 맞는 값을 찍어라
}
export default GetData
