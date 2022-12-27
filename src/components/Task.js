import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const Task = () => {
  // getting id from url by useParams hook
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
    <div>
      {Task && <h3>{Task.task}</h3>}
    </div>
  )
}

export default Task