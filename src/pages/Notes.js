import React, {useState, useEffect} from 'react'

const Notes = () => {

  // using usestate to assign setters and getters
  const [Notes, setNotes] = useState([])
  // Making funcation to retrive data
  const Retrive_notes = async () => {
    const response = await fetch('https://django-server-production-d333.up.railway.app/api/notes/')
    const data = await response.json()
    console.log(data)
    setNotes(data)
  }

  // Using Effect to call function to get Tasks from database
  useEffect (() => {
    Retrive_notes()
  },[])

  return (
    <div>
      {Notes.length > 0 &&
        <p>Number of notes in the database is {Notes.length}</p>
      }
    </div>
  )
}

export default Notes