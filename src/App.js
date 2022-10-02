import React, { useEffect, useState } from 'react'
import './App.css'
import Router from './components/Router'
import RoutinVideo from './components/WeekContainer/RoutinVideo/RoutinVideo'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function App() {
  return (
    <div className="App">
      {/* <RoutinVideo /> */}
      <Router />
    </div>
  )
}
export default App
