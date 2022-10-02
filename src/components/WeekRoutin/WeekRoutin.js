import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { dbService } from '../../fbase'
import GetData from '../GetData/GetData'
import GetWeekRoutinList from './GetWeekRoutinList/GetWeekRoutinList'


const WeekRoutin = ({ dayValue, userObj,setPage,shutDownHandler}) => {
  const dayCalculationArray = []
  const CalculationNum = dayValue.getDay()
  console.log(typeof dayValue)
  let startdayValue = dayjs(dayValue)
  let dayc = startdayValue
  startdayValue = startdayValue.add(-CalculationNum, 'day')

  
console.log(dayc)
  for (let i = 0; i < 7; i++) {
    const inputDay = dayjs(startdayValue)
    const resultDay = inputDay.add(i, 'day')
    dayCalculationArray.push(resultDay)
  }
  // 내가 뽑아야되는 일주일 날짜
// console.log(dayCalculationArray)
  return <div className='weekRoutin'>
    {dayCalculationArray.map((date) => (
      <div key={Math.random()}><GetWeekRoutinList  userObj={userObj}
      date={date}
      setPage={setPage}
      shutDownHandler={shutDownHandler}/></div>
      //내가 뽑고 싶은 것을 컴퍼넌트로.
      ))
  }
  </div>
  
}
export default WeekRoutin
