import React, { useState } from 'react'
import 'firebase/storage'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { dbService, storage } from '../../../../fbase'
import dayjs from 'dayjs'

const MyDietProcess = ({ userObj, date }) => {
  const userId = userObj
  const dateId = date
  const [progress, setProgress] = useState(0)

  const upLoadFiles = (file) => {
    if (!file) return
    const storageRef = ref(storage, `/file/${file.name}`)
    const upLoadTask = uploadBytesResumable(storageRef, file)

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
          const createdId = userId + Math.random()
          await dbService.collection('image').add({
            createdId,
            user: userId,
            date: dayjs(dateId).format('YY-MM-DD'),
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
    <div>
      <form onSubmit={uploadHandler}>
        <input type="file" className="fileInput"></input>
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h3>진행률 : {progress}%</h3>
    </div>
  )
}
export default MyDietProcess
