import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Todolist = () => {

  // using usestate to assign setters and getters
  const [Tasks, setTasks] = useState([])
  // Making funcation to retrive data
  const Retrive_Tasks = async () => {
    const response = await fetch('https://django-server-production-d333.up.railway.app/api/todo/')
    const data = await response.json()
    console.log(data)
    setTasks(data)
  }

  // Using Effect to call function to get Tasks from database
  useEffect (() => {
    Retrive_Tasks()
  },[])

  return (
    <div>
      {Tasks.map((task, index) => ( 
        <Link to={`/home/todo/${task.id}`} key={index}>{task.task}</Link>
      ))}
    </div>
  )
}

export default Todolist