import React, { useState } from "react";
import './Container1.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import '../Calendarp/Calendarp.css'


const Container1=()=>{
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
    //   ]
    }
  ]
  console.log(userItem[0].userID)
    return (
    <div className="Container1">
        <Calendar className="r" onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">
        {userItem.map((item)=>(<div key={Math.random()}>
          {item.userID}의 식단
          <ul>{item.routin.map((routinitem)=>(<li key={Math.random()}>
            {routinitem.part} : {routinitem.ex}
          </li>))}</ul>
        </div>))}
         </div> 
    </div>
    )
} // {} -> () 43번 
// map()함수 (배열컴포넌트) *키값 중요!! 하나로 묶어주는 것 -> () , 콘솔로 오류 찾기, 반환값 확인
export default Container1

