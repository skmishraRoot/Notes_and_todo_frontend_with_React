import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Authcontext from '../context/AuthContext'



const Note = () => {

  const {user,token} = useContext(Authcontext)
  const params = useParams()
  const navigate = useNavigate()
  const [Note, setNote] = useState(null)


  // Getting note
  const get_Note = async() => {
    const response = await fetch(`/api/notes/${params.id}/`,{
      method:"GET",
      headers:{
        'Content-Type':'application/json',
        'Authorization':(`Bearer ${token.access}`)
      }
    })
    const data = await response.json()
    setNote(data)
  }



  // Delete function.
  const delete_note = async() => {
    const response = await fetch(`/api/notes/delete/${params.id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'Authorization':(`Bearer ${token.access}`)
      },
    })
    if (response.status === 200){
      navigate('/home/notes')
    }else if (response.status === 204) {
      navigate('/home/notes')
    }else{
      alert('Something wrong')
    }
  }



  // use effect
  useEffect(() => {
    get_Note()
  })


  
  return (
    <div className='note'>
      <div className='note-header'>   
        <h1 onClick={()=>{navigate(-1)}}>&#10092;</h1>
        <button className='function-buttons' onClick={delete_note}>Delete</button>
      </div>
      <div className='note-body'>
        <form>
          {Note && <input className='note-title' name='notetitle' defaultValue={Note.title}/>}
          {Note && <textarea className='note-content' name='notecontent' defaultValue={Note.content}></textarea>}
          <button className='function-buttons' onClick={()=>navigate('/home/notes')}>Back</button>
        </form>
      </div> 
    </div>
  )
}

export default Note