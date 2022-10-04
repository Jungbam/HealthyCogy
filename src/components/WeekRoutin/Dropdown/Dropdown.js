import React, { useEffect, useState } from 'react'
import { dbService } from '../../../fbase'

const Dropdown = ({ data }) => {
  const routin = data.routin
  const [basicRoutinArray, setBasicRoutinArray] = useState([])

  useEffect(() => {
    const basicRoutindbRef = dbService.collection('basicRoutin')
    basicRoutindbRef.get().then((doc) => {
      const dataArray = doc.docs.map((doc) => ({
        ...doc.data(),
      }))
      const selectBasicRoutin = dataArray.filter((data) => data.id === routin)
      setBasicRoutinArray(selectBasicRoutin[0].routin)
    })
  }, [])

  console.log(basicRoutinArray)
  //데이터 받아서 basicRoutinArray에 넣어놓음.

  return (
    <div class="dropdown">
      <button type="button" class="dropdown-toggle">
        {/* 드롭다운이 되면 클래스가 .dropdown-menu.show가 되면 됩니다.
      useState 쓰면 되겠죠? */}
        기본루틴을 보시려면 클릭하세요.
      </button>
      <ul class="dropdown-menu">
        {/* 여기에 map함수로 li-button으로 만들어서 불러오세요. 
        버튼을 누르면 위쪽에 button-toggle이 값이 바뀌어야겠죠?
        버튼 클래스명은 dropdown-option입니다.*/}
      </ul>
    </div>
  )
}
export default Dropdown
