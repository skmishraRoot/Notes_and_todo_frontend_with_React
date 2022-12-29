import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Authcontext from '../context/AuthContext'


const Task = () => {


  const {token} = useContext(Authcontext)
  const navigate = useNavigate()
  const params = useParams()
  const [Task, setTask] = useState(null)



  // Getting note
  const get_Task = async() => {
    const response = await fetch(`/api/todo/${params.id}/`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':(`Bearer ${token.access}`)
      },
    })
    const data = await response.json()
    setTask(data)
  }



  const delete_note = async() => {
    const response = await fetch(`/api/todo/delete/${params.id}/`,{
      method:'DELETE',
      headers:{
          'Content-Type':'application/json',
          'Authorization':(`Bearer ${token.access}`)
        },
    })
    if (response.status === 200 ){
      navigate('/home/todo')
    }else if (response.status === 204 ) {
      navigate('/home/todo')
    }else{
      alert('Something wrong')
    }
  }

  
  
  // use effect
  useEffect(() => {
    get_Task()
  })

  return (
    <div className='note'>
      <div className='note-header'>   
        <h1 onClick={()=>navigate(-1)}>&#10092;</h1>
        <button className='function-buttons' onClick={delete_note}>Delete</button>
      </div>
      <div className='todo-body'>
        {Task && <h3 className='todo-title'>{Task.task}</h3>}
        <button className='function-buttons' onClick={() => navigate('/home/todo')} type='submit'>Back</button>  
      </div> 
    </div>
  )
}

export default Task