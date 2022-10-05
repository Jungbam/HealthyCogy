import React, { useEffect, useState } from 'react'
import { dbService } from '../../../fbase'
import './Dropdown.css'

const Dropdown = ({ data }) => {
  const routin = data.routin
  const [basicRoutinArray, setBasicRoutinArray] = useState([3])
  const [showing, setShowing] = useState(false)
  const [routinName, setRoutinName] = useState('휴식')

  useEffect(() => {
    switch (routin) {
      case 'chest':
        setRoutinName('가슴')
        break
      case 'arm':
        setRoutinName('팔')
        break
      case 'back':
        setRoutinName('등')
        break
      case 'lowerbody':
        setRoutinName('하체')
        break
      case 'shoulder':
        setRoutinName('어깨')
        break
      case 'aerobicexercise':
        setRoutinName('유산소')
        break
      case 'Breaktime':
        setRoutinName('휴식')
        break
    }
  }, [])
  useEffect(() => {
    const basicRoutindbRef = dbService.collection('basicRoutin')
    basicRoutindbRef.get().then((doc) => {
      const dataArray = doc.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectBasicRoutin = dataArray.filter((data) => data.id === routin)
      setBasicRoutinArray(selectBasicRoutin[0].routin)
    })
  }, [])
  const toggleMenu = () => {
    setShowing(!showing) // on,off 개념 boolean
  }

  return (
    <div className="dropdown">
      <button type="button" onClick={toggleMenu}>
        {routinName} 루틴
      </button>
      <ul className={!showing ? 'dropdown-menu' : 'dropdown-menu show'}>
        {Array.isArray(basicRoutinArray)
          ? basicRoutinArray.map((data, index) => (
              <li key={index} className="dropdown-option">
                <button>{data}</button>
              </li>
            ))
          : '배열이 아닙니다.'}
      </ul>
    </div>
  )
}
export default Dropdown
