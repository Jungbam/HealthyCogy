import React, { useEffect, useState } from 'react'
import { authService } from '../../fbase'
import CalendarContainer from '../CalendarContainer/CalendarContainer'
import WeekContainer from '../WeekContainer/WeekContainer'
import BoardContainer from '../BoardContainer/BoardContainer'
import WriteContainer from '../WeekContainer/WeekContainer'
import './MyStorage.css'

const MyStorage = (props) => {
  const [date, setDate] = useState(new Date())
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState('')

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user.uid)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])

  return (
    <div className="MyStorage">
      <CalendarContainer
        date={date}
        init={init}
        isLoggedIn={isLoggedIn}
        userObj={userObj}
        setDate={setDate}
      />
      {/* 달력 코드 */}
      <WeekContainer
        date={date}
        init={init}
        isLoggedIn={isLoggedIn}
        userObj={userObj}
      />
      {/* 운동 루틴 추천, 하루 식단  */}
      <BoardContainer
        date={date}
        init={init}
        isLoggedIn={isLoggedIn}
        userObj={userObj}
      />
      {/* 게시판, 영상 알고리즘 */}
    </div>
  )
}
export default MyStorage
