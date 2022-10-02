import React, { useState } from 'react'
import Food from '../../page/Food/Food'
import BMI from '../../page/Bmi/BMI'
import './HeadeLine.css'
import { authService, firebaseInstance } from '../../fbase'
import { dbService } from '../../fbase'
import { NavLink } from 'react-router-dom'

const HeadeLine = (props) => {
  const logoutHandler = () => {
    authService.signOut()
  }
  return (
    <div className="headerDiv">
      <NavLink to="/">
        <h1 id="page_logo">헬시코기</h1>
      </NavLink>
      <nav className="navItems">
        <ul>
          <li>
            <NavLink
              to="/bmi"
              className={(isActive) => (isActive ? 'selected' : 'not')}
            >
              BMI계산기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food"
              className={(isActive) => (isActive ? 'selected' : 'not')}
            >
              식단추천
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Mystorage"
              className={(isActive) => (isActive ? 'selected' : 'not')}
            >
              MyStorage
            </NavLink>
          </li>

          <button onClick={logoutHandler}>로그아웃</button>
        </ul>
      </nav>
    </div>
  )
}
export default HeadeLine
