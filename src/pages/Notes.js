import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Notes = () => {

  // using usestate to assign setters and getters
  const [Notes, setNotes] = useState([])
  // Making funcation to retrive data
  const Retrive_notes = async () => {
    const response = await fetch('https://django-server-production-d333.up.railway.app/api/notes/')
    const data = await response.json()
    setNotes(data)
  }

  // Using Effect to call function to get Tasks from database
  useEffect (() => {
    Retrive_notes()
  },[])

  return (
    <div className='app-body'>
      <div className='notes-header'>
        <h1>Notes</h1>
        <h1>
        <Link to='/home/notes/create'>&#43;</Link>
        </h1>
      </div>
      <div className='notes-list'>
        <h3 className='notes-list-item'>
        {Notes.map((note, index) => ( 
          <Link to={`/home/notes/${note.id}`} key={index}>{note.title}</Link>
        ))}
        </h3>
      </div>
    </div>
  )
}

export default Notes