import React, { useEffect, useState } from 'react'
import { authService } from '../../fbase'
import CalendarContainer from '../CalendarContainer/CalendarContainer'
import WeekContainer from '../WeekContainer/WeekContainer'
import BoardContainer from '../BoardContainer/BoardContainer'
import WriteContainer from '../WeekContainer/WeekContainer'
import './MyStorage.css'

const MyStorage = (props) => {
  const [date, setDate] = useState(new Date())
  const [userObj, setUserObj] = useState('')

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user.uid)
      } else {
        alert('로그인이 필요합니다. 메인페이지로 가세요.')
      }
    })
  }, [])

  return (
    <div className="MyStorage">
      <CalendarContainer date={date} userObj={userObj} setDate={setDate} />
      {/* 달력 코드 */}
      <WeekContainer date={date} userObj={userObj} />
      {/* 운동 루틴 추천, 하루 식단  */}
      <BoardContainer date={date} userObj={userObj} />
      {/* 게시판, 영상 알고리즘 */}
    </div>
  )
}
export default MyStorage
