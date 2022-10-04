import React from 'react'
import FoodBoard from '../FoodBoard/FoodBoard'
import WeekRoutin from '../WeekRoutin/WeekRoutin/WeekRoutin'
import './WeekContainer.css'

const WeekContainer = ({ userObj, date, setPage, shutDownHandler }) => {
  // console.log(userObj, date, setPage, shutDownHandler)
  return (
    <div className="WeekContainer">
      <WeekRoutin
        userObj={userObj}
        dayValue={date}
        setPage={setPage}
        shutDownHandler={shutDownHandler}
      />
      <FoodBoard
        userObj={userObj}
        date={date}
        setPage={setPage}
        shutDownHandler={shutDownHandler}
      />
    </div>
  )
}
export default WeekContainer
