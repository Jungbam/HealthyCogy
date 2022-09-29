import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import { authService } from './fbase'
import MainContainer from './components/MainContent/MainContainer'
import GetData from './components/GetData/GetData'
import InputModal from './components/InputModal/InputModal'

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)
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
    <div className="App">
      <MainContainer isLoggedIn={isLoggedIn} />
      <Footer />
      {/* <GetData userObj={userObj} /> */}
      {/* <InputModal userObj={userObj} /> */}
    </div>
  )
}
export default App
