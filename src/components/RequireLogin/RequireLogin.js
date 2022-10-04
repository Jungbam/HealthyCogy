import React, { useState } from 'react'
import { authService, firebaseInstance } from '../../fbase'
import './RequireLogin.css'

const RequireLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [newAccount, setNewAccount] = useState(true)
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
  const onSocialHandler = async (event) => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider()
    const data = await authService.signInWithPopup(provider)
  }
  return (
    <div className="headerDiv">
      <div id="page_logo">
        <a href="/">헬시코기</a>
      </div>
      <nav>
        <ul>
          <li className="containerBox">
            <form onSubmit={onSubmit}>
              <input className='email'
                name="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={onChange}
              ></input>
              <input className='password'
                name="password"
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={onChange}
              ></input>
              <input type="submit" />
            </form>
            <button className='google' onClick={onSocialHandler}>구글로 로그인</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default RequireLogin
