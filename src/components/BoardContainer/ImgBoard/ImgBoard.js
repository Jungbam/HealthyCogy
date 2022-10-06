import React from 'react'
import './ImgBoard.css'
import MyDietProcess from './MyDietProcess/MyDietProcess'
import MyPicture from './Mypicture/MyPicture'

const ImgBoard = (props) => {
  return (
    <div className="ImgBoard">
      <MyPicture userObj={props.userObj} date={props.date} />
      <MyDietProcess userObj={props.userObj} date={props.date} />
    </div>
  )
}
export default ImgBoard
