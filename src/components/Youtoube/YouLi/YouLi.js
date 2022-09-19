import React, { useState } from 'react'
import ReactPlayer from 'react-player'
// const [url, setUrl] = useState('')
// fetch(
//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3hRpIQ4x5niJDwjajQSVPg&maxResults=10&order=date&key=AIzaSyDMBz_tD3Iymj1XhQOZ0gMT5a_CgbaVnhE',
// )
//   .then((result) => {
//     return result.json()
//   })
//   .then((data) => {
//     const ranNum = Math.floor(Math.random() * 10)
//     console.log(data.items)
//   })
export default function YouLi() {
  return (
    <ul className="you-list">
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
    </ul>
  )
}
