import React, { useEffect, useState } from 'react'
import { authService } from '../../fbase'
import CalendarContainer from '../CalendarContainer/CalendarContainer'
import WeekContainer from '../WeekContainer/WeekContainer'
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
      <WeekContainer
        date={date}
        init={init}
        isLoggedIn={isLoggedIn}
        userObj={userObj}
      />
      가나다라
      아아아아
    </div>
  )
}
export default MyStorage
