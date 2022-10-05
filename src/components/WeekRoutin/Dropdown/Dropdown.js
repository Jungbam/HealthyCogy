import React, { useEffect, useState } from 'react'
import { dbService } from '../../../fbase'
import './Dropdown.css'

const Dropdown = ({ data }) => {
  const routin = data.routin
  const [basicRoutinArray, setBasicRoutinArray] = useState([])
  const [isOpen, setMenu] = useState(false)
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
    setMenu((isOpen) => !isOpen) // on,off 개념 boolean
  }
  //데이터 받아서 basicRoutinArray에 넣어놓음.

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-toggle"
        onClick={() => toggleMenu()}
      >
        기본루틴을 보시려면 클릭하세요.
      </button>
      <ul className={!isOpen ? 'dropdown-menu' : 'dropdown-menu.show'}>
        {basicRoutinArray.map((data, index) => (
          <li key={index}>
            <button>{data}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Dropdown
