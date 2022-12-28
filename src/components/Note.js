import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const Note = () => {
  // getting url id from useparams hook
  const params = useParams()
  const navigate = useNavigate()
  // use state
  const [Note, setNote] = useState(null)

  // Getting note
  const get_Note = async() => {
    const response = await fetch(`https://django-server-production-d333.up.railway.app/api/notes/${params.id}`)
    const data = await response.json()
    setNote(data)
  }

  // use effect
  useEffect(() => {
    get_Note()
  })

  return (
    <div className='note'>
      <div className='note-header'>   
        <h1 onClick={()=>navigate(-1)}>&#10092;</h1>
      </div>
      <div className='note-body'>
        <form>
          {Note && <input className='note-title' defaultValue={Note.title}/>}
          {Note && <textarea className='note-content' defaultValue={Note.content}></textarea>}
        </form>
      </div> 
    </div>
  )
}

export default Note