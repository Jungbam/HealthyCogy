import React from 'react'
import { dbService } from '../../fbase'
import Intro from '../Intro/Intro'

const MainContainer = (props) => {
  console.log(props.isLoggedIn)
  return (
    <div className="main-container">
      <Intro isLoggedIn={props.isLoggedIn} />
    </div>
  )
}

export default MainContainer
