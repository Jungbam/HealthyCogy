import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slide from './Slide'

const TOTAL_SLIDES = 2 // 전체 슬라이드 개수(총3개. 배열로 계산)
// 깃 확인
export default function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)
  // const img = './Img/rec.png'
  const img = ['./Img/tip.png','./Img/tip1.png','./Img/tip2.png','./Img/tip3.png','./Img/tip4.png','./Img/tip5.png','./Img/tip6.png','./Img/tip7.png']

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0) // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES) // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }
 
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out'
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)` // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide])

  return (
    <Container>
      <Text>
        <h1>다이어트 꿀팁</h1>
      </Text>

      <SliderContainer ref={slideRef}>
        {/* {img.map((item)=>(<Slide>{item}</Slide>))} */}
        <Slide img={img[0]} />
        <Slide img={img[1]} />
        <Slide img={img[2]} />
        <Slide img={img[3]} />
        <Slide img={img[4]} />
        <Slide img={img[5]} />
        <Slide img={img[6]} />
        <Slide img={img[7]} />
        
      </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>Prev</Button>
        <Button onClick={NextSlide}>Next</Button>
        <Button onClick={props.onCLickFn}>닫기</Button>
      </Center>
    </Container>
  )
}
const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 400px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`
const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`
const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex; // 이미지들을 가로로 나열합니다.
`
const Text = styled.div`
  text-align: center;
  color: burlywood;
  p {
    color: #fff;
    font-size: 20px;
    background-color: burlywood;
    display: inline-block;
    border-radius: 50px;
    padding: 0.5em 1em;
  }
`
const Center = styled.div`
  text-align: center;
`
