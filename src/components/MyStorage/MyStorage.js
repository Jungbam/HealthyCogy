import React from 'react'
import CalendarContainer from '../CalendarContainer/CalendarContainer'
import WriteContainer from '../WriteContainer/WriteContainer'
import './MyStorage.css'

const MyStorage = (props) => {
  return (
    <div className="MyStorage">
      <CalendarContainer />
      <WriteContainer />
      {/* <Routin />
    <Routin /> */}
    </div>
  )
}
export default MyStorage
