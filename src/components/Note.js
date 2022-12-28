import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Authcontext from '../context/AuthContext'

const Note = () => {
  const {user} = useContext(Authcontext)
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

  // update note working
  const update_note = async(e) => {
    const response = await fetch(`https://django-server-production-d333.up.railway.app/api/notes/update/${params.id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/type'
      },
      body:JSON.stringify({'id':params.id,'title':e.target.title.value,'content':e.target.content.value,'user':user.user_id})
    })
    const data = await response.json()
    if (response.status === 200 ){
      navigate('/home/notes')
    }else{
      alert('Something wrong')
    }
  }

  const delete_note = async() => {
    const response = await fetch(`https://django-server-production-d333.up.railway.app/api/notes/delete/${params.id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
    })
    const data = await response.json()
    console.log(response)
    if (response.status === 200 ){
      navigate('/home/notes')
    }else if (response.status === 204 ) {
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
        <h1 onClick={()=>navigate(-1)}>&#10092;</h1>
      </div>
      <div className='note-body'>
        <form onSubmit={update_note}>
          {Note && <input className='note-title' name='title' defaultValue={Note.title}/>}
          {Note && <textarea className='note-content' name='content' defaultValue={Note.content}></textarea>}
          <button type='submit'>Done</button>
        </form>
        <button onClick={delete_note}>Delete</button>
      </div> 
    </div>
  )
}

export default Note