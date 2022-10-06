import React from 'react'
import ReactPlayer from 'react-player'
import './YouCon.css'

export default function YouCon() {
  return (
    <div className="chucheon-container">
        <ReactPlayer 
          className="player"
          url={'https://www.youtube.com/watch?v=N3v_YrlilBY'}
          width="450px"
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
        <ReactPlayer
          className="player"
          url={'https://www.youtube.com/watch?v=FCfLAaEePyU'}
          width="450px"
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
        <ReactPlayer
          className="player"
          url={'https://www.youtube.com/watch?v=cIzEoosVsUg'}
          width="450px"
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
    </div>
  )
}
