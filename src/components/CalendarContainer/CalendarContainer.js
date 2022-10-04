import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { authService } from '../../fbase' //경로!!!
import 'react-calendar/dist/Calendar.css' // css import
import './CalendarContainer.css'
import InputModal from '../InputModal/InputModal'
import GetData from '../GetData/GetData'

const CalendarContainer = ({ date, init, isLogedin, userObj, setDate }) => {
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
    </div>
  )
}
export default CalendarContainer
