import React, { useEffect, useState } from 'react'
import { authService, dbService } from '../../fbase'
import UserBoard from './UserBoard'
import './MentoComunity.css'

const MentoCoumunity = () => {
  const [userObj, setUserObj] = useState('')
  const [userBoardProps, setUserBoardProps] = useState([])

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user)
      } else {
      }
    })

    //이건 부모에 들어가야겠다. 멘토라면 불러오자.

    //커뮤니티의 값들을 모은다. 각각의 userId별 컴퍼넌트를 만든다.
    //1. 그러려면 나를 멘토로 지정한 Id들을 찾는다.
    //2. 각 userId별로 나눈다.

    //DB에서 각 멘토별 userId를 mentomatch
    //멘토 ID가 doc으로 저장된다.
    //거기에 각 useID를 입력시키고.
    //각 유저별로 뽑아와 보자.

    // user ID 별로 Array를 만들자.
    dbService.collection('mentomatch').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedUserArray = dataArray.filter((data) => {
        // console.log(data)
        return data.mento === userObj.uid
      })
      const myMentiIdArray = selectedUserArray.map((data) => data.user)
      const finalArray = myMentiIdArray.filter((data) => data !== userObj.uid)
      setUserBoardProps(finalArray)
    })
    //props로 userId를 내려준다. 뽑은 데이터 값을 만든다.
  }, [userObj])

  console.log(userBoardProps)
  return (
    <div className="MentoComunityFullBox">
      {userBoardProps.map((data, index) => (
        <UserBoard
          photoURL={userObj.photoURL}
          userId={data}
          mentoId={userObj.uid}
          key={index}
        />
      ))}
    </div>
  )
}
export default MentoCoumunity
