import React, { useState } from 'react'
import './HeadeLine.css'
import { authService, firebaseInstance } from '../../fbase'
import { NavLink } from 'react-router-dom'

const HeadeLine = (props) => {
  const logoutHandler = () => {
    authService.signOut()
  }
  return (
    <div className="headerDiv">
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <h1 id="page_logo">헬시코기</h1>
      </NavLink>
      <nav className="navItems">
        <div className="header1">
          <ul>
            <li>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to="/bmi"
              >
                BMI계산기
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to="/food"
              >
                식단추천
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to="/Mystorage"
              >
                MyStorage
              </NavLink>
            </li>
          </ul>
        </div> 
        <p><strong>{props.user.displayName}</strong>님 반갑습니다.</p>
        <div className='aa'>
        <img className="userProfile" src={props.user.photoURL}></img>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <div>
              <button className="logoutBtn" onClick={logoutHandler}>
                로그아웃
              </button>
              </div>
            </NavLink>
            </div>
        <input type="checkbox" id="icon" />
        <label htmlFor="icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div id="header">
          <ul>
            <li>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to="/bmi"
              >
                BMI계산기
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to="/food"
              >
                식단추천
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to="/Mystorage"
              >
                MyStorage
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default HeadeLine
