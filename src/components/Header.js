import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'


const Header = () => {

  const {user, logoutUser} = useContext(Authcontext)
  
  return (
    <div className='header-container'>
      {user && <strong>{user.username}</strong>}
      {user ? (
        <h5 onClick={logoutUser}>Logout</h5>
      ):(<Link to={'/login'}>Login</Link>)}
      <Link to='/home/notes'>Notes App</Link>
      <Link to='/home/todo'>Todo App</Link>
    </div>
  )
}

export default Header