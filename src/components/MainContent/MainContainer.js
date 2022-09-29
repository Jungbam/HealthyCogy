import React from 'react'
import { dbService } from '../../fbase'
import Intro from '../Intro/Intro'

const MainContainer = (props) => {
  return (
    <div className="main-container">
      <Intro isLoggedIn={props.isLoggedIn} />
    </div>
  )
}

export default MainContainer
