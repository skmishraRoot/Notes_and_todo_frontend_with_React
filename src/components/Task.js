import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'


const Task = () => {
  // getting id from url by useParams hook
  const navigate = useNavigate()
  const params = useParams()
  // use state
  const [Task, setTask] = useState(null)

  // Getting note
  const get_Task = async() => {
    const response = await fetch(`https://django-server-production-d333.up.railway.app/api/todo/${params.id}`)
    const data = await response.json()
    setTask(data)
  }

  const delete_note = async() => {
    const response = await fetch(`https://django-server-production-d333.up.railway.app/api/todo/delete/${params.id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
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
        <button className='function-buttons' type='submit'>Done</button>  
      </div> 
    </div>
  )
}

export default Task