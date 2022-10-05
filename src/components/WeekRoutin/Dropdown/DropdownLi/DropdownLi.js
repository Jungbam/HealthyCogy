import React, { useState } from 'react'

const DropdownLi = ({ index, data, editMyRoutin, deleteEditMyroutin }) => {
  const [inputValue, setInputValue] = useState('')
  const onChangevalue = (e) => {
    setInputValue(e.target.value)
    editMyRoutin(e)
  }

  return (
    <li key={index} className="dropdown-option">
      <input
        type="text"
        value={inputValue}
        onChange={onChangevalue}
        placeholder={data}
        data-index={index}
      />
      <button onClick={deleteEditMyroutin}>제외</button>
    </li>
  )
}

export default DropdownLi
