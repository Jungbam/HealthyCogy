import React from 'react'
import MainContainer from '../MainContent/MainContainer'
import './RandomFeed.css'

const RandomFeed = () => {
  const unsplashURL = 'https://source.unsplash.com/random/'
  const rows = 10

  const imgArray = []
  const getRandomNr = () => {
    const Size = Math.floor(Math.random() * 10) + 300
    console.log(Size)
    return Size
  }
  const getRandomSize = () => {
    const Size = getRandomNr()
    const returnValue = `${Size}x${Size}`
    return returnValue
  }
  for (let i = 0; i < rows * 3; i++) {
    const imgSrc = `${unsplashURL}${getRandomSize()}`
    imgArray.push(imgSrc)
  }

  return (
    <div className="container">
      {imgArray.map((img) => (
        <img src={img}></img>
      ))}
    </div>
  )
}

export default RandomFeed
