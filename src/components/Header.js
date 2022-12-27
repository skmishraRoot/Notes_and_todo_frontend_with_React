import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'


const Header = () => {

  const {user, logoutUser} = useContext(Authcontext)
  
  return (
    <div className='header-container'>
      {user && <strong>{user.username}</strong>}
      {user ? (
        <p onClick={logoutUser}>Logout</p>
      ):(<Link to={'/login'}>Login</Link>)}
    </div>
  )
}

export default Header