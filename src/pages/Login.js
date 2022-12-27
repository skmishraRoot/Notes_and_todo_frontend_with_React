import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'

const Login = () => {

  const {loginUser} = useContext(Authcontext)


  return (
    <div className='Login-container'>
      <div className='login-head-container'>
        <p>
          Hello there welcome to my website
        </p>
        <p>
          In these website I show case my skill of frontend and backend 
          I build the backend with Django Rest Framework and frontend with React Framework.
          They are quit a good stack to work.
        </p>

      </div>
      <div className='login-form-container'>
        <form onSubmit={loginUser}>
          <h3>Login Form</h3>
          <input type='text' name='username' placeholder='Username'/>
          <input type='password' name='password' placeholder='Password'/>
          <input type='submit'/>
        </form>
        <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login