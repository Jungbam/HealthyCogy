import React, { useState } from 'react'
import 'firebase/storage'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { dbService, storage } from '../../../../fbase'
import dayjs from 'dayjs'
import './MyDietProcess.css'

const MyDietProcess = ({ userObj, date }) => {
  const userId = userObj
  const dateId = dayjs(date).format('YY-MM-DD')
  const [progress, setProgress] = useState(0)

  const upLoadFiles = (file) => {
    if (!file) return
    const storageRef = ref(storage, `/file/${file.name}`)
    const upLoadTask = uploadBytesResumable(storageRef, file)
    const createdId = userId + dateId

    upLoadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )
        setProgress(prog)
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(upLoadTask.snapshot.ref).then(async (urlvalue) => {
          await dbService.collection('image').doc(createdId).set({
            createdId,
            user: userId,
            date: dateId,
            url: urlvalue,
          })
        })
      },
    )
  }
  const uploadHandler = (e) => {
    e.preventDefault()
    const file = e.target[0].files[0]
    upLoadFiles(file)
  }

  return (
    <div className="myDietProcessContainer">
      <form onSubmit={uploadHandler} className="formContainer">
        <input type="file" className="fileInput"></input>
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h3>진행률 : {progress}%</h3>
    </div>
  )
}
export default MyDietProcess
