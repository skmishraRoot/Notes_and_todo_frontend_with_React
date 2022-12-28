import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Todolist = () => {

  // using usestate to assign setters and getters
  const [Tasks, setTasks] = useState([])
  // Making funcation to retrive data
  const Retrive_Tasks = async () => {
    const response = await fetch('https://django-server-production-d333.up.railway.app/api/todo/')
    const data = await response.json()
    setTasks(data)
  }

  // Using Effect to call function to get Tasks from database
  useEffect (() => {
    Retrive_Tasks()
  },[])

  return (
    <div className='app-body'> 
      <div className='todo-header'>
        <h1>Todo List</h1>
        <h1>
        <Link to='/home/todo/create'>&#43;</Link>
        </h1>
      </div>
      <div className='todo-list'>
        {Tasks.map((task, index) => ( 
        <Link to={`/home/todo/${task.id}`} key={index}><h3 className='todo-list-item'>{task.task}</h3></Link>
          ))}
      </div>
    </div>
  )
}

export default Todolist