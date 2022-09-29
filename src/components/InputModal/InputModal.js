import React, { useState } from 'react'
import { dbService } from '../../fbase'

import classes from './InputModal.module.css'

const InputModal = (props) => {
  const userId = props.userObj

  const [inputRoutin, setInputRoutin] = useState('')
  const [inputEx, setInputEx] = useState('')
  const routinInput = document.getElementById('routin')
  const exInput = document.getElementById('ex')

  const routinChangeHandler = () => {
    setInputRoutin(routinInput.value)
  }
  const exChangeHandler = () => {
    setInputEx(exInput.value)
  }

  const addHandler = (event) => {
    event.preventDefault()
    console.log(dbService.collection('userId'))
    dbService.collection('userId').add({
      routin: routinInput.value,
      ex: exInput.value,
    })
  }
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>추가할 운동루틴</h2>
        </header>
        <form className={classes.content}>
          <label htmlFor="routin">운동루틴</label>
          <input
            type="text"
            value={inputRoutin}
            id="routin"
            onChange={routinChangeHandler}
          />
          <label htmlFor="ex">운동횟수</label>
          <input
            type="number"
            value={inputEx}
            id="ex"
            onChange={exChangeHandler}
          />
          <button className={classes.button} onClick={addHandler}>
            등록
          </button>
        </form>
        <footer className={classes.actions}></footer>
      </div>
    </div>
  )
}

export default InputModal
