import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import Authcontext from '../context/AuthContext';



// addnote function
const Addtask = () => {

  const navigate = useNavigate();
  const {user} = useContext(Authcontext)
//   const [task, settask] = useState(null)
  const create_task = async(e) => {
    e.preventDefault()
    const response = await fetch('https://django-server-production-d333.up.railway.app/api/todo/create/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'task':e.target.createtask.value, 'completed':e.target.createstatus.value, 'user':user.user_id})
    })
    if (response.status === 201){
      navigate('/home/todo')
    }else{
      alert('Something went wrong.please try again.')
    }
    const data = await response.json()
    // settask(data)
  }
  return (
    <div className='todo'>
    <div className='todoback-header'>   
      <h1 onClick={()=>navigate(-1)}>&#10092;</h1>
    </div>
    <div className='todo-body'> 
     <form className='todo-form' onSubmit={create_task}>
        <input className='todo-title' placeholder='Your Note title' name='createtask'/>
        <input className='todo-checkbox' name='createstatus' type='checkbox'/><br/>
        <button className='function-buttons' type='submit'>Create</button>
     </form>
    </div> 
  </div>
  )
}

export default Addtask