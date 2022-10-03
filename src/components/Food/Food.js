import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { dbService } from "../../fbase";
import './Food.css'

const Food = ({userObj,date}) =>{
    const userId = userObj
    const dateId = dayjs(date).format('YY-MM-DD')
    const [data, setData] = useState([])
    
    useEffect(() => {
        //실시간으로 DB에서 받아오기.
        dbService.collection('healthycogy').onSnapshot((snapshot) => {
          const dataArray = snapshot.docs.map((doc) => ({
            ...doc.data(),
          }))
          const selectedUserArray = dataArray.filter((data) => {
            return data.user === userId
          })
          const outputArray = selectedUserArray.filter((data) => {
            return data.date == dateId
          })
          setData(outputArray)
        })
      }, [date])
      
    return <div className="Food">
        <h3>+ 식단</h3>
        <ul>
            <li className="diet"><p>아침 : {data.map((data)=>((data.breakfast)))}</p><input className="kcal" type='number'/></li>
            <li className="diet"><p>점심 : {data.map((data)=>((data.lunch)))}</p><input className="kcal" type='number'/></li>
            <li className="diet"><p>저녁 : {data.map((data)=>((data.dinner)))}</p><input className="kcal" type='number'/></li>
        </ul>
        <div>total : {}</div> 
    </div>
}//total 계산하기
export default Food