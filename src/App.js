import React, { useEffect, useState } from 'react'
import './App.css'
import Router from './components/Router'
import RoutinVideo from './components/WeekContainer/RoutinVideo/RoutinVideo'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MyDietProcess from './components/MyDietProcess/MyDietProcess'
function App() {
  return (
    <div className="App">
      {/* <Router /> */}
      <MyDietProcess />
    </div>
  )
}
export default App
