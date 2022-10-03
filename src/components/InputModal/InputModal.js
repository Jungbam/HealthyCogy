import React, { useState } from 'react'
import { dbService } from '../../fbase'
import dayjs from 'dayjs'
import classes from './InputModal.module.css'
import TodoBoard from '../TodoBoard'

const InputModal = (props) => {
  const userId = props.userObj
  const dateId = props.date
  const [inputRoutin, setInputRoutin] = useState('')
  const [inputEx, setInputEx] = useState('')
  const [todolist,setTodolist] = useState([])

  const addItem =() =>{
    setTodolist([...todolist,inputEx])
  }

console.log(todolist)
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
        <div className={classes.content}>
          <label htmlFor="part">운동</label>
          <input key={Math.round()}
            type="text"
            value={inputRoutin}
            id="routin"
            onChange={routinChangeHandler}
          />
          <label htmlFor="food">식단</label>
          {/* 1. 인풋창과 추가버튼이 있다.
          2. 추가버튼을 누르면 아래 추가한 영역이 생긴다.
          3. 추가한 영역에 삭제 버튼이 있다. 누르면 삭제가 된다. */}
          <input
            type="text"
            value={inputEx}
            id="ex"
            onChange={exChangeHandler}
          /><button onClick={addItem}>추가</button>
          <TodoBoard todolist={todolist}/>
          <label htmlFor="food">점심</label>
          {/* 1. 인풋창과 추가버튼이 있다.
          2. 추가버튼을 누르면 아래 추가한 영역이 생긴다.
          3. 추가한 영역에 삭제 버튼이 있다. 누르면 삭제가 된다. */}
          <input
            type="text"
            value={inputEx}
            id="ex"
            onChange={exChangeHandler}
          /><button onClick={addItem}>추가</button>
          <TodoBoard todolist={todolist}/>
          <label htmlFor="food">저녁</label>
          {/* 1. 인풋창과 추가버튼이 있다.
          2. 추가버튼을 누르면 아래 추가한 영역이 생긴다.
          3. 추가한 영역에 삭제 버튼이 있다. 누르면 삭제가 된다. */}
          <input
            type="text"
            value={inputEx}
            id="ex"
            onChange={exChangeHandler}
          /><button onClick={addItem}>추가</button>
          <TodoBoard todolist={todolist}/>
          <button className={classes.button} onClick={addHandler}>
            등록
          </button>
        </div>
        <footer className={classes.actions}></footer>
      </div>
    </div>
  )
}

export default InputModal
