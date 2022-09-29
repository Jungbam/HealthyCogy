import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './Routes/Auth'
import MainContainer from './MainContent/MainContainer'

const Router = (props) => {
  console.log(props.isLoggedIn)
  return (
    <BrowserRouter>
      <Routes>
        {!props.isLoggedIn ? (
          <Route path="/" element={<Auth isLoggedIn={props.isLoggedIn} />} />
        ) : (
          <Route path="/" element={<MainContainer />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}
export default Router
