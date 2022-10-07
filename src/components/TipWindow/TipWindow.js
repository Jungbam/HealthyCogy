import React, { useState } from 'react'
import './TipWindow.css'

const TipWindow = (props) => {
  const [show, setShow] = useState(false)

  const onClickHandler = () => {
    setShow(!show)
  }
  return (
    <div className="absoluteTip">
      <img
        onClick={onClickHandler}
        src="/Img/question.png"
        className="questionTipImg"
      />
      <div className={show ? 'showTipBox' : 'noShowTipBox'}>
        <h1>{props.name}</h1>
        <p>{props.children}</p>
      </div>
    </div>
  )
}
export default TipWindow
