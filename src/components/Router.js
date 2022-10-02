import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { authService } from '../fbase'
import BMI from '../page/Bmi/BMI'
import Food from '../page/Food/Food'
import Intro from '../page/Intro/Intro'
import Footer from './Footer'
import HeadeLine from './HeadeLine/HeadeLine'
import MyStorage from './MyStorage/MyStorage'
import RequireLogin from './RequireLogin/RequireLogin'

const Router = (props) => {
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
    <BrowserRouter>
      {isLoggedIn ? <HeadeLine isLoggedIn={isLoggedIn} /> : <RequireLogin />}
      <Routes>
        <Route path="/" element={<Intro isLoggedIn={isLoggedIn} />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/food" element={<Food />} />
        <Route path="/Mystorage" element={<MyStorage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default Router
