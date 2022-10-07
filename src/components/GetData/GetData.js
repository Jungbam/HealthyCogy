import React, { useEffect, useState } from 'react'
import { dbService } from '../../fbase'
import dayjs from 'dayjs'
import classes from './GetData.module.css'
import EditModal from './EditModal/EditModal'
import TipWindow from '../TipWindow/TipWindow'

const GetData = ({ userObj, date, setPage, shutDownHandler }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
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
      <TipWindow>
        <h2>달력에서</h2>
        <h2> 정보가져오기</h2>
        <hr></hr>
        <p>원하는 해당 일자를 클릭하면 내 기록을 볼 수 있어요.</p>
        <p>일자를 선택하면 운동루틴 추천이 떠요.</p>
        <p>운동루틴을 정하면 루틴에 맞는 영상이 플레이됩니다.</p>
      </TipWindow>
      {data.length === 0 ? (
        <div className={classes.diaryContainer}>
          <h1 className="input">내용을 입력해주세요.</h1>
          <br></br>
          <h2 className="input">
            기록하고 싶은 해당 일자를 누르고 △ 입력하기 버튼을 누르면 입력할 수
            있어요.
          </h2>
        </div>
      ) : (
        data.map((data) => (
          <div key={Math.random()}>
            <div onClick={deleteHandler.bind(null, data)}>
              <ul>
                <li>
                  <span>+ 운동</span>
                  <br />
                  {data.routin}{' '}
                </li>
                <li>
                  <span>+ 식단</span>
                  <br />
                  아침 : {data.breakfast}
                </li>
                <li>점심 : {data.lunch}</li>
                <li>저녁 : {data.dinner}</li>
              </ul>
            </div>
            <button onClick={editCallHandler.bind(null, data)}>수정</button>
          </div>
        ))
      )}
    </div>
  )
}
export default GetData
