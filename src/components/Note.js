import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const Note = () => {
  // getting url id from useparams hook
  const params = useParams()
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
    <div>
      {Note && <h3>{Note.title}</h3>} 
    </div>
  )
}

export default Note