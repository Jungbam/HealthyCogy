import React, { useEffect, useState } from 'react'
import { dbService } from '../../../fbase'
import './Dropdown.css'
import DropdownLi from './DropdownLi/DropdownLi'

const Dropdown = ({ data, userId, dateId }) => {
  const routin = data ? data.routin : 'Breaktime'
  const [basicRoutinArray, setBasicRoutinArray] = useState([])
  const [showing, setShowing] = useState(false)
  const [routinName, setRoutinName] = useState('휴식')
  const [inputResultArray, setInputResultArray] = useState([])

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
  const editMyRoutin = (event) => {
    const IndexNumber = event.target.dataset.index
    const inputNewValue = event.target.value
    basicRoutinArray.splice(IndexNumber, 1, inputNewValue)
    setInputResultArray(basicRoutinArray)
  }
  // const deleteEditMyroutin = (event) => {
  //   console.log('in')
  //   const IndexNumber = event.target.dataset.index
  //   basicRoutinArray.slice(IndexNumber, IndexNumber + 1)
  //   setInputResultArray(basicRoutinArray)
  // }
  const routinInputHandler = async () => {
    const createdId = userId + dateId
    await dbService
      .collection('MyRoutin')
      .doc(createdId)
      .set({
        createdId,
        user: userId,
        date: dateId,
        routin: inputResultArray,
      })
      .then(alert('루틴이 등록되었습니다.'))
  }
  //unshift() - 배열을 오른쪽으로 이동 / 첫번째에 추가
  const closeDropdownHandler = () => {
    if (window.confirm('등록없이 닫으시겠습니까?')) {
      setShowing(false)
    } else {
      alert('원하시는 루틴을 등록해주세요.')
    }
  }
  // console.log(basicRoutinArray)
  return (
    <div className="dropdownBox">
      <div className="dropdown">
        <button type="button" onClick={toggleMenu}>
          {routinName} 루틴 보기
        </button>
        <ul className={!showing ? 'dropdown-menu' : 'dropdown-menu show'}>
          <span onClick={closeDropdownHandler}>X</span>
          {Array.isArray(basicRoutinArray)
            ? basicRoutinArray.map((data, index) => (
                <DropdownLi
                  key={index}
                  index={index}
                  data={data}
                  editMyRoutin={editMyRoutin}
                  // deleteEditMyroutin={deleteEditMyroutin}
                />
              ))
            : '배열이 아닙니다.'}
          <button onClick={routinInputHandler}>나의 루틴으로 등록</button>
        </ul>
      </div>
    </div>
  )
}
export default Dropdown
