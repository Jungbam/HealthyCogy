import React, { useState } from 'react'
import { dbService } from '../../fbase'
import dayjs from 'dayjs'
import classes from './InputModal.module.css'

const InputModal = (props) => {
  const userId = props.userObj
  const dateId = props.date

  console.log(dateId)

  const [inputRoutin, setInputRoutin] = useState('')
  const [inputEx, setInputEx] = useState('')
  const routinChangeHandler = (e) => {
    setInputRoutin(e.target.value)
  }
  const exChangeHandler = (e) => {
    setInputEx(e.target.value)
  }

  const addHandler = async (event) => {
    event.preventDefault()
    const createdId = userId + Math.random()
    await dbService
      .collection('healthycogy')
      .doc(createdId)
      .set({
        createdId,
        user: userId,
        date: dayjs(dateId).format('YY-MM-DD'),
        routin: inputRoutin,
        ex: inputEx,
      })
    props.shutDown()
  }
  return (
    <div>
      <div className={classes.backdrop} onClick={props.shutDown} />
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
