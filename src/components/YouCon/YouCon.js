import React from 'react'
import ReactPlayer from 'react-player'
import './YouCon.css'

export default function YouCon() {
  return (
    <div className="youtub-container">
        <ReactPlayer 
          className="player1"
          url={'https://www.youtube.com/watch?v=N3v_YrlilBY'}
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
        <ReactPlayer
          className="player2"
          url={'https://www.youtube.com/watch?v=FCfLAaEePyU'}
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
        <ReactPlayer
          className="player3"
          url={'https://www.youtube.com/watch?v=cIzEoosVsUg'}
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
    </div>
  )
}
