import React from 'react'
import WeekRoutin from '../WeekRoutin/WeekRoutin'
import './WeekContainer.css'

const WeekContainer = ({ userObj, date, setPage, shutDownHandler }) => {
  console.log(userObj, date, setPage, shutDownHandler)
  return (
    <div className="WeekContainer">
      <WeekRoutin
        userObj={userObj}
        dayValue={date}
        setPage={setPage}
        shutDownHandler={shutDownHandler}
      />
    </div>
  )
}
export default WeekContainer
