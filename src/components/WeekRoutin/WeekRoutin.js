import React from 'react'
import dayjs from 'dayjs'

const WeekRoutin = ({ dayValue }) => {
  const dayCalculationArray = []
  const CalculationNum = dayValue.getDay()
  let startdayValue = dayjs(dayValue)
  startdayValue = startdayValue.add(-CalculationNum, 'day')

  for (let i = 0; i < 7; i++) {
    const inputDay = dayjs(startdayValue)
    const resultDay = inputDay.add(i, 'day').format('YY-MM-DD')
    dayCalculationArray.push(resultDay)
  }
  // 내가 뽑아야되는 일주일 날짜

  return
  {
    dayCalculationArray.map((date) => {
      //내가 뽑고 싶은 것을 컴퍼넌트로.
    })
  }
}
export default WeekRoutin
