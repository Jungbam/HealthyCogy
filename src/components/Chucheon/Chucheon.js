import React from 'react'
import './Chucheon.css'

const Chucheon = (props) => {
  return (
    <div className="container">
      <a href={props.pageNum}>
        <img src={props.imgSet} />
      </a>
      <p className="text">{props.text}</p>
    </div>
  )
}
export default Chucheon
