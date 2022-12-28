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
  // use effect
  useEffect(() => {
    get_Task()
  })

  return (
    <div className='todo'>
      <div className='todoitem-header'>   
        <h1 onClick={()=>navigate(-1)}>&#10092;</h1>
      </div>
      <div className='todo-body'>
        {Task && <h3 className='todo-title'>{Task.task}</h3>}
      </div> 
    </div>
  )
}

export default Task