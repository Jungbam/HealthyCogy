import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { authService, dbService } from '../../fbase'
import './Mento.css'

const Mento = () => {
  const [dataArray, setDataArray] = useState([])
  // 이 창을 어디에다가 띄울까?
  // 1. 모든 화면에서 띄우게 하려면 App에서 fixed로?
  // 2. Router에서 fiexed 로?
  // 위치 / 기본 와꾸 완료
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [userObj, setUserObj] = useState('')
  const [mentoSet, setMentoSet] = useState(true)
  const [mentoApearSet, setMentoApearSet] = useState(true)
  const [mentoId, setMentoId] = useState('')
  const [mentoringText, setMentoringText] = useState('')
  //인풋 값 변하게. 이 값으로 저장이 되게
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        console.log(user)
        setUserObj(user)
      } else {
        setIsLoggedIn(false)
      }
    })
    dbService.collection('comunity').onSnapshot((snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectedUserArray = dataArray.filter((data) => {
        return data.user === userObj.uid
      })
      console.log(selectedUserArray)
      setDataArray(selectedUserArray)
    })
  }, [userObj])
  //멘토 아이디가 바뀔때마다

  //로직
  // 시작은 일단 isLogedIn이 true면 시작. => 완
  // 1. 멘토를 선택하도록 한다.
  //    -> 멘토-유저 매칭에 대해서 DB에 입력을 한다.

  // + 멘토창 컴퍼넌트 작성
  //    -> 커뮤니티 자체 컴퍼넌트를 만든다.
  //   -> 멘토가 나라면 그 사람이랑 대화가 가능하도록.
  //   -> 멘토가 되는 사람마다 창이 하나씩 만들어지게.(관리창)
  //   -> toUser가 해당 사람이면 그 사람에게 출력.

  // doc은 user.uid+new Date()로 지정
  // 멘토 매칭 필드 : user : user.uid / mento : 선택된 멘토id /
  // 해당 대화를 찾아야 한다면 include() 써야 될듯

  // 4. 커뮤니티에 있는 데이터들을 다 받아온다.
  // 5. 커뮤니티에서 받아온 데이터를 거른다.
  //    -> userId만 받아오게
  // 6. 멘토가 toUser가 나인 것을 받아온다.
  // 7. 받아온 데이터를 입력한 날짜에 맞춰서 정렬한다.
  // 8. 이 기능들을 묶어서 map으로 출력한다.
  const mentoApearHandler = (e) => {
    e.preventDefault()
    setMentoApearSet(true)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setMentoSet(true)
    setMentoId(e.target.value)
  }
  const onChangementoringTextHandler = (e) => {
    setMentoringText(e.target.value)
  }
  const enterkey = async () => {
    const createdAt = new Date()
    if (window.event.keyCode == 13) {
      console.log(userObj.uid)
      await dbService
        .collection('comunity')
        .doc(userObj.uid + createdAt)
        .set({
          createdAt,
          user: userObj.uid,
          mento: mentoId,
          text: mentoringText,
        })
      setMentoringText('')
    }
  }
  return (
    <div className="mentoComunityMain">
      {mentoApearSet ? (
        <form>
          <select onChange={onSubmitHandler}>
            <option>상담을 원하는 멘토를 선택해주세요.</option>
            <option value="호영">호영</option>
            <option value="서연">서연</option>
          </select>
        </form>
      ) : (
        <></>
      )}
      {mentoSet ? (
        <div className="mentoComunityMainContents">
          <div className="mentComunityDiv"></div>
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
      ) : (
        <></>
      )}
      {isLoggedIn ? (
        <button onClick={mentoApearHandler}>멘토에게 물어보기(이미지)</button>
      ) : (
        <></>
      )}
    </div>
  )
}
export default Mento
