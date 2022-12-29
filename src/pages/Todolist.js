import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'


const Todolist = () => {
  
  const {token} = useContext(Authcontext)
  // using usestate to assign setters and getters
  const [Tasks, setTasks] = useState([])
  // Making funcation to retrive data
  const Retrive_Tasks = async () => {
    const response = await fetch('https://django-api.up.railway.app/api/todo/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':(`Bearer ${token.access}`)
      },
    })
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
        {Tasks.length === 0 && <h3>No tasks yet.</h3>}
        {Tasks.map((task, index) => ( 
        <Link to={`/home/todo/${task.id}`} key={index}><h3 className='todo-list-item'>{task.task}</h3></Link>
          ))}
      </div>
    </div>
  )
}

export default Todolist