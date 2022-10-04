import React from 'react'

function TodoBoard({ list }) {
  return (
    <div>
      {list.map((item) => (
        <div key={Math.random()}>
          <div >{item}</div>
        </div>
      ))}
    </div>
  )
}
export default TodoBoard