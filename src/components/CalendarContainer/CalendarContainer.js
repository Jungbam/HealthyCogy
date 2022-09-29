import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import './CalendarContainer.css'

// import '../CalendarSection/CalendarSection.css'


const CalendarContainer=()=>{
    const [value, onChange] = useState(new Date());
    console.log(value)
    const userItem = [{
      userID : '123',
      createDay : moment(value).format("YYYY년 MM월 DD일"),
      routin : [
        {part : '하체', ex: '레그익스프레스'},
        {part : '상체', ex: '크런치'}
      ],
      food : [
        {part : '아침', ex : '토마토'},
        {part : '점심', ex : '샐러드'},
        {part : '저녁', ex : '쉐이크'}
      ],
      water : [
        'O' , 'X'
      ]
    // },{
    //   userID : '124',
    //   createDay : moment(value).format("YYYY년 MM월 DD일"),
    //   routin : [
    //     {part : '하체', ex: '레그익스프레스'},
    //     {part : '상체', ex: '크런치'}
    //   ],
    //   food : [
    //     {part : '아침', ex : '토마토'},
    //     {part : '점심', ex : '샐러드'},
    //     {part : '저녁', ex : '닭가슴살'}
    //   ], water : [
    //     'O' , 'X'
    //   ]
    }
  ]
  console.log(userItem[0])
  console.log(userItem[1])
    return (
    <div className="CalendarContainer">
        <Calendar onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">
        {userItem .map((item)=>(<div key={Math.random()}>
          {/* <h1>{item.userID}의 식단</h1> */}
          <h3>+ 운동</h3>
          <ul>{item.routin.map((routinitem)=>(<li key={Math.random()}>
           <input type='checkbox'/> {routinitem.part} : {routinitem.ex}
          </li>))}</ul>
          <h3>+ 식단</h3>
          <ul>{item.food.map((fooditem)=>(<li key={Math.random()}>
          <input type='checkbox'/> {fooditem.part} : {fooditem.ex}
          </li>))}</ul>
          <h3>+ 물 섭취</h3>
          <ul className="water">{item.water.map((wateritem)=>(<li key={Math.random()}>
           <input type='checkbox'/> {wateritem}
          </li>))}</ul>
        </div>))}
         </div> 
    </div>
    )
} // {} -> () 43번 
// map()함수 (배열컴포넌트) *키값 중요!! 하나로 묶어주는 것 -> () , 콘솔로 오류 찾기, 반환값 확인
//질문 : 배열안에 여러개 객체가 있을 경우 map()함수를 이용해 하나의 객체만 가져오기 위해서는 어떻게?
export default CalendarContainer

