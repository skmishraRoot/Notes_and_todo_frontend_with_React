import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Authcontext from '../context/AuthContext';



// addnote function
const Addnotes = () => {


  const navigate = useNavigate();
  const {user, token} = useContext(Authcontext)
  const [note, setnote] = useState(null)
  

  // create function
  const create_note = async(e) => {
    e.preventDefault()
    const response = await fetch('https://django-api.up.railway.app//api/notes/create/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':(`Bearer ${token.access}`
      )},
      body:JSON.stringify({'title':e.target.createtitle.value, 'content':e.target.createcontent.value, 'user':user.user_id})
    })
    if (response.status === 201){
      navigate('/home/notes')
    }else{
      alert('Something went wrong please try again.')
    }
    const data = await response.json()
    setnote(data)
  }
  

  return (
    <div className='note'>
    <div className='note-header'>   
      <h1 onClick={()=>navigate(-1)}>&#10092;</h1>
    </div>
    <div className='note-body'> 
     <form onSubmit={create_note}>
        <input className='note-title' placeholder='Your Note title' name='createtitle'/>
        <textarea className='note-content'  placeholder='Your Note body' name='createcontent'></textarea>
        <button className='function-buttons' type='submit'>Create</button>
     </form>
    </div> 
  </div>
  )
}

export default Addnotes