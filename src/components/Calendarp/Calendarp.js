import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import './Calendarp.css'
import moment from 'moment';


function Calendarp() {
    
    const [value, onChange] = useState(new Date());

  return (
    <div className='Calendar'>
      <Calendar className="r" onChange={onChange} value={value} />
      <div className="text-gray-500 mt-4">
           {moment(value).format("YYYY년 MM월 DD일")} 
         </div>
    </div>
  );
}
export default Calendarp