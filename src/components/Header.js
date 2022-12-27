import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'


const Header = () => {

  const {user, logoutUser} = useContext(Authcontext)
  
  return (
    <div className='header-container'>
      <div className='header-con-1'>
        <Link className='header-item' to='/'>Home</Link>
        <Link className='header-item' to='/home/notes'>Notes App</Link>
        <Link  className='header-item' to='/home/todo'><span>Todo App</span></Link>
      </div>
      <div className='header-con-2'>
        <span className='header-item'>User:{user && <strong>{user.username}</strong>}</span>
        <span className='header-item'>{user ? (<span onClick={logoutUser}>Logout</span>):(<Link to={'/login'}>Login</Link>)}</span>
      </div>
    </div>
  )
}

export default Header