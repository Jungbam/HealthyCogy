import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { dbService } from "../../fbase";
import './FoodBoard.css'

const FoodBoard = ({userObj,date}) =>{
    const userId = userObj
    const dateId = dayjs(date).format('YY-MM-DD')
    const [data, setData] = useState([])
    const [brackfastkcal, setBrackfastKcal] = useState('')
    const [lunchkcal, setLunchKcal] = useState('')
    const [dinnerkcal, setDinnerKcal] = useState('')
    const [total, setTotal] = useState('')



    const breakfast = (e) =>{
      setBrackfastKcal(e.target.value)
    } 
    const lunch = (e) =>{
      setLunchKcal(e.target.value)
    } 
    const dinner = (e) =>{
      setDinnerKcal(e.target.value)
    } 

    const Total =()=>{
      setTotal(+brackfastkcal + +lunchkcal + +dinnerkcal)
     
    }
  
   
    
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
        <button onClick={Total}>계산</button> 총 kcal :  {total}
        <ul>
            <li className="diet"><p>아침 : {data.map((data)=>((data.breakfast)))}</p><input onChange={breakfast} value={brackfastkcal} className="kcal" type='number'/></li>
            <li className="diet"><p>점심 : {data.map((data)=>((data.lunch)))}</p><input onChange={lunch} value={lunchkcal} className="kcal" type='number'/></li>
            <li className="diet"><p>저녁 : {data.map((data)=>((data.dinner)))}</p><input onChange={dinner} value={dinnerkcal} className="kcal" type='number'/></li>
        </ul>
       
       
        
    </div>
}//total 계산하기
export default FoodBoard