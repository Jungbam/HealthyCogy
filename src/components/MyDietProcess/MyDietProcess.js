import React from 'react'
import firebase from 'firebase/compat'
import 'firebase/storage'
const MyDietProcess = () => {
  const storage = firebase.storage()

  return (
    <div>
      <form>
        <input type="file" className="fileInput"></input>
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}
export default MyDietProcess
