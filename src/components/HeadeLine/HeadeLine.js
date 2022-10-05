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
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1 id="page_logo">헬시코기</h1> 
      </NavLink>
      <nav className="navItems">
        <label for="check_box">
        <span className='ss'></span>
        <span></span>
        <span></span>
       </label>
        <ul>
          <li>
            <NavLink  style={{ textDecoration: "none" ,color:'white'}}
              to="/bmi"
              className={(isActive) => (isActive ? 'selected' : 'not')}
            >
              BMI계산기
            </NavLink>
          </li>
          <li>
            <NavLink  style={{ textDecoration: "none",color:'white' }}
              to="/food"
              className={(isActive) => (isActive ? 'selected' : 'not')}
            >
              식단추천
            </NavLink>
          </li>
          <li>
            <NavLink  style={{ textDecoration: "none" ,color:'white'}}
              to="/Mystorage"
              className={(isActive) => (isActive ? 'selected' : 'not')}
            >
              MyStorage
            </NavLink>
          </li>

          <button className='logoutBtn' onClick={logoutHandler}>로그아웃</button>
        </ul>
      </nav>
    </div>
  )
}
export default HeadeLine
//logo 디자인 완료!, nav 디자인(햄버거).. 