import React, { useState } from 'react'
import { dbService } from '../../fbase'

import classes from './InputModal.module.css'

const InputModal = (props) => {
  const userId = props.userObj
  
  console.log(props)
  
  

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
    dbService.collection(userId).add({
      day : props.date,
      routin: routinInput.value,
      ex: exInput.value,
    })
    props.aaa()
  }
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>리스트</h2>
        </header>
        <form className={classes.content}>
          <label htmlFor="part">운동</label>
          <input
            type="text"
            value={inputRoutin}
            id="routin"
            onChange={routinChangeHandler}
          />
          <label htmlFor="food">식단</label>
          <input
            type="text"
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
