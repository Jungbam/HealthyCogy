import React, { useState } from "react";
import './Container1.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment';
import '../Calendarp/Calendarp.css'


const Container1=()=>{
    const [value, onChange] = useState(new Date());
    console.log(value)
    const day = [
    ]
    return <div className="Container1">
        <Calendar className="r" onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">
           {moment(value).format("YYYY년 MM월 DD일")} 
         </div>
    </div>
}
export default Container1

