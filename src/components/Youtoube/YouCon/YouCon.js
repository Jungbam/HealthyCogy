import React from 'react'
import ReactPlayer from 'react-player'
import './YouCon.css'

export default function YouCon() {
  return (
    <ul className="chucheon-container">
      <li>
        <ReactPlayer
          className="player"
          url={'https://www.youtube.com/watch?v=N3v_YrlilBY'}
          width="450px"
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
        <h1 style={{ color: 'white' }}>추천영상</h1>
      </li>
      <li>
        <ReactPlayer
          className="player"
          url={'https://www.youtube.com/watch?v=FCfLAaEePyU'}
          width="450px"
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
        <h1 style={{ color: 'white' }}>추천영상</h1>
      </li>
      <li>
        <ReactPlayer
          className="player"
          url={'https://www.youtube.com/watch?v=cIzEoosVsUg'}
          width="450px"
          heigth="400px"
          playing={true}
          muted={true}
          controls={true}
        />
        <h1 style={{ color: 'white' }}>추천영상</h1>
      </li>
    </ul>
  )
}
