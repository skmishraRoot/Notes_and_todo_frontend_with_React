import React, {useState, useEffect} from 'react'



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
      {Tasks.length > 0 &&
        <p>Number of notes in the database is {Tasks.length}</p>
      }
    </div>
  )
}

export default Todolist