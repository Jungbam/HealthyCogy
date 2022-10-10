import React, { useEffect, useState } from 'react'
import { dbService } from '../../fbase'
import './UserBoard.css'

const UserBoard = ({ userId, mentoId, photoURL }) => {
  const [dataArray, setDataArray] = useState([])
  const [mentoDataArray, setMentoDataArray] = useState([])
  const [mentoringText, setMentoringText] = useState('')
  const [userName, setUserName] = useState('')
  useEffect(() => {
    dbService.collection('comunity').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedUserArray = dataArray.filter((data) => {
        return data.user === userId
      })
      const selectedMentoArray = selectedUserArray.filter((data) => {
        return data.mento === mentoId
      })
      setDataArray(selectedMentoArray)
      setUserName(
        selectedUserArray.length > 0 ? selectedUserArray[0].name : 'Unknown',
      )
    })

    dbService.collection('comunity').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedUserArray = dataArray.filter((data) => {
        return data.touser === userId
      })

      const selectedMentoArray = selectedUserArray.filter((data) => {
        return data.mento === mentoId
      })
      setMentoDataArray(selectedMentoArray)
    })
  }, [userId])

  const onChangementoringTextHandler = (e) => {
    setMentoringText(e.target.value)
  }
  const enterkey = async () => {
    const createdAt = Date.now()
    if (window.event.keyCode == 13) {
      console.log('hi')
      await dbService
        .collection('comunity')
        .doc(mentoId + createdAt)
        .set({
          createdAt,
          user: mentoId,
          mento: mentoId,
          touser: userId,
          text: mentoringText,
          photoURL: '/Img/coach.jpg',
          name: mentoId,
        })
      setMentoringText('')
    }
  }
  const mentoPageOutputArray = [...dataArray, ...mentoDataArray]
  console.log(mentoPageOutputArray)
  const sortedmentoPageArray = mentoPageOutputArray.sort(
    (a, b) => new Date(a.data) - new Date(b.date),
  )
  //작업 -> 시간별로 정렬한 배열을 매핑하기

  console.log(sortedmentoPageArray)
  return (
    <div className="mentoMentoPageComunityMainContents">
      <div className="mentComunityDiv">
        <h1>{userName}님과의 대화</h1>
        {sortedmentoPageArray.map((data, index) => (
          <div
            className={data.user === mentoId ? 'talkBox-right' : 'talkBox-left'}
            key={index}
          >
            <span className="mentoringTextBox">{data.text}</span>
          </div>
        ))}
      </div>
      <div className="mentoComunityChatContainer">
        <input
          type="text"
          className="mentoCoumunityChat"
          value={mentoringText}
          onChange={onChangementoringTextHandler}
          onKeyUp={enterkey}
        ></input>
        <button onClick={enterkey}>Enter</button>
      </div>
    </div>
  )
}

export default UserBoard
