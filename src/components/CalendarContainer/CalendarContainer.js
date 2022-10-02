import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { authService } from '../../fbase' //경로!!!
import 'react-calendar/dist/Calendar.css' // css import
import './CalendarContainer.css'
import InputModal from '../InputModal/InputModal'
import GetData from '../GetData/GetData'
import Weekdays from 'react-calendar/dist/umd/MonthView/Weekdays'
import WeekRoutin from '../WeekRoutin/WeekRoutin'

const CalendarContainer = () => {
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
  //모달창 부르기
  const [page, setPage] = useState('')

  function shutDownHandler() {
    setPage('')
  }
  function onChange(date) {
    setPage(
      <InputModal shutDown={shutDownHandler} userObj={userObj} date={date} />,
    )
    setDate(date)
  }

  //------
  return (
    <div className="CalendarContainer">
      <Calendar calendarType="US" onChange={onChange} value={date} />
      <div>{page}</div>

      <GetData
        userObj={userObj}
        date={date}
        setPage={setPage}
        shutDownHandler={shutDownHandler}
      />
       <WeekRoutin  userObj={userObj}
        dayValue={date}
        setPage={setPage}
        shutDownHandler={shutDownHandler} />

      {/* 1. getdata 불러오기 
            2. getdata userid(props)를 넘겨준다.
            3. getdata가 없을 때 하나의 그림이 나오도록 코딩(getdata의 필드값이 없을 때)*/}
    </div>
  )
} // {} -> () 43번
// map()함수 (배열컴포넌트) *키값 중요!! 하나로 묶어주는 것 -> () , 콘솔로 오류 찾기, 반환값 확인
//질문 : 배열안에 여러개 객체가 있을 경우 map()함수를 이용해 하나의 객체만 가져오기 위해서는 어떻게?
export default CalendarContainer
