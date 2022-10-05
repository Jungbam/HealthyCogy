import React from 'react'
import FoodBoard from '../FoodBoard/FoodBoard'
import WeekRoutin from '../WeekRoutin/WeekRoutin/WeekRoutin'
import './WeekContainer.css'

const WeekContainer = ({ userObj, date }) => {
  return (
    <div className="WeekContainer">
      <WeekRoutin userObj={userObj} dayValue={date} />
      <FoodBoard userObj={userObj} date={date} />
    </div>
  )
}
export default WeekContainer
