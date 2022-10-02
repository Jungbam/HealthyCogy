import React, { useState } from 'react'
import { authService } from '../../fbase'
import HeadeLine from '../HeadeLine/HeadeLine'

const Auth = () => {
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
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
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
        <input
          type="submit"
          value={newAccount ? '새 계정만들기' : '로그인하기'}
        />
      </form>
      <div>
        <button> 구글로 로그인</button>
      </div>
      {error}
    </div>
  )
}
export default Auth
