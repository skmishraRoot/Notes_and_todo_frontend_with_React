import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'


const Header = () => {

  const {user, logoutUser} = useContext(Authcontext)
  
  return (
    <div className='app-header'>
      <div className=''>
        <Link className='app-header-item' to='/'>Home</Link>
        <Link className='app-header-item' to='/home/notes'>Notes App</Link>
        <Link className='app-header-item' to='/home/todo'><span>Todo App</span></Link>
      </div>
      <div>
        <span className='app-header-item'><strong>User : </strong>{user && <span className='username_onheader'>{user.username}</span>}</span>
        <button className='app-header-item'>{user ? (<span onClick={logoutUser}>Logout</span>):(<Link to={'/login'}>Login</Link>)}</button>
      </div>
    </div>
  )
}

export default Header