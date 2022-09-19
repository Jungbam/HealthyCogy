import React from 'react'

const HeadeLineList = (props) => {
  return (
    <li className="headerli" onClick={props.onClicked}>
      {props.listname}
    </li>
  )
}
export default HeadeLineList
