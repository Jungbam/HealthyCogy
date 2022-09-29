import React, { useState } from 'react'
import Food from '../../Food/Food'
import BMI from '../../BMI/BMI'
import './HeadeLine.css'
import HeadeLineList from './HeadLineList/HeadLineList'
import { authService, firebaseInstance } from '../../../fbase'
import { dbService } from '../../../fbase'
import MyStorage from '../../MyStroage/MyStorage'

const HeadeLine = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data
      if (newAccount) {
        //계정 새로만들기
        data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        //로그인
        data = await authService.signInWithEmailAndPassword(email, password)
      }
    } catch (error) {
      setError(error.message)
    }
  }
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    try {
      if (name === 'email') {
        setEmail(value)
      } else if (name === 'password') {
        setPassword(value)
      }
    } catch (errorEvent) {
      setError(error.message)
      console.log(error)
    }
  }
  const onSocialHandler = async (event) => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider()
    const data = await authService.signInWithPopup(provider)
    console.log(data)
  }
  const onClickedBMIHandler = async (e) => {
    const BMIPage = <BMI />
    props.changePage(BMIPage)
  } //BMI 계산기 페이지 추가
  const onClickedFoodHandler = (e) => {
    const FoodPage = <Food />
    props.changePage(FoodPage)
  }
  const onClickedMyPageHandler = (e) => {
    const MyPage = <MyStorage />
    props.changePage(MyPage)
  }
  const logoutHandler = () => {
    authService.signOut()
  }
  return (
    <div className="headerDiv">
      <div>
        <div id="page_logo">
          <a href="/">헬시코기</a>
        </div>
        <nav>
          {props.isLoggedIn ? (
            <ul>
              <HeadeLineList
                listname="BMI계산기"
                onClicked={onClickedBMIHandler}
              />
              <HeadeLineList
                listname="식단 추천"
                onClicked={onClickedFoodHandler}
              />
              <HeadeLineList
                listname="My Storage"
                onClicked={onClickedMyPageHandler}
              />
              <button onClick={logoutHandler}>로그아웃</button>
            </ul>
          ) : (
            <li>
              <form onSubmit={onSubmit}>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onChange}
                ></input>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                  value={password}
                  onChange={onChange}
                ></input>
                {/* <p onClick={toggleAccount}>
                  {newAccount ? '새 계정을 만들어보세요.' : '로그인 하세요.'}
                </p> */}
                <input
                  type="submit"
                  // value={newAccount ? '새 계정만들기' : '로그인하기'}
                />
              </form>
              <button onClick={onSocialHandler}>구글로 로그인</button>
            </li>
          )}
        </nav>
      </div>
    </div>
  )
}
export default HeadeLine
