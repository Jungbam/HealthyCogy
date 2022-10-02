import React, { useEffect, useState } from 'react'
import './App.css'
import Router from './components/Router'
import WeekRoutin from './components/WeekRoutin/WeekRoutin'
function App() {
  return (
    <div className="App">
      <WeekRoutin dayValue={new Date()} />
      {/* <Router /> */}
      {console.log(new Date())}
    </div>
  )
}
export default App
