import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'

const Notes = () => {

  const {token} = useContext(Authcontext)

  // using usestate to assign setters and getters
  const [Notes, setNotes] = useState([])

  // Making funcation to retrive data
  const Retrive_notes = async () => {
    const response = await fetch('https://django-server-production-d333.up.railway.app/api/notes/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':(`Bearer ${token.access}`)
      }
    })
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
      {Notes.length === 0 && <h3>No tasks yet.</h3>}
      {Notes && Notes.map((note, index) => ( 
          <Link to={`/home/notes/${note.id}`} key={index}> <h3 className='notes-list-item'>{note.title}</h3></Link>
        ))}
      </div>
    </div>
  )
}

export default Notes