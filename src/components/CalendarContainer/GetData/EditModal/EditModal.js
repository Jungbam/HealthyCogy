import React, { useState } from 'react'
import classes from './EditModal.module.css'
import { dbService } from '../../../fbase'

const EditModal = (props) => {
  const EditDoc = { ...props.editDoc }

  const [inputRoutin, setInputRoutin] = useState(EditDoc.routin)
  const [inputEx, setInputEx] = useState(EditDoc.ex)

  const routinChangeHandler = (e) => {
    setInputRoutin(e.target.value)
  }
  const exChangeHandler = (e) => {
    setInputEx(e.target.value)
  }
  const editHandler = async (e) => {
    e.preventDefault()
    const ok = window.confirm('수정하겠소?')
    if (ok) {
      await dbService
        .collection('healthycogy')
        .doc(EditDoc.createdId)
        .update({ routin: inputRoutin, ex: inputEx })
    }
    props.shutDownHandler()
  }
  return (
    <div>
      <div className={classes.backdrop} onClick={props.shutDownHandler} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>리스트</h2>
        </header>
        <form className={classes.content} onSubmit={editHandler}>
          <label htmlFor="part">운동</label>
          <input
            type="text"
            value={inputRoutin}
            id="routin"
            onChange={routinChangeHandler}
          />
          <label htmlFor="food">횟수</label>
          <input
            type="text"
            value={inputEx}
            id="ex"
            onChange={exChangeHandler}
          />
          <button type="submit" className={classes.button}>
            수정
          </button>
        </form>
        <footer className={classes.actions}></footer>
      </div>
    </div>
  )
}

export default EditModal
