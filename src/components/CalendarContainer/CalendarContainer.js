import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarContainer.css'
import InputModal from '../InputModal/InputModal'
import GetData from '../GetData/GetData'

const CalendarContainer = ({ date, userObj, setDate }) => {
  //모달창 부르기
  const [page, setPage] = useState('')

  function shutDownHandler() {
    setPage('')
  }
  function onChange(date) {
    setDate(date)
  }
  const callInputHandler = () => {
    setPage(
      <InputModal shutDown={shutDownHandler} userObj={userObj} date={date} />,
    )
  }
  const month = new Date(date).getMonth() + 1
  const day = new Date(date).getDate()

  return (
    <div className="CalendarContainer col_4 col_s_4">
      <Calendar calendarType="US" onChange={onChange} value={date} />
      <div>{page}</div>
      <button className="inmydiary" onClick={callInputHandler}>
        {month}월 {day}일 나의 운동 기록하기
      </button>
      <GetData
        userObj={userObj}
        date={date}
        setPage={setPage}
        shutDownHandler={shutDownHandler}
      />
    </div>
  )
}
export default CalendarContainer
