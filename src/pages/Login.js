import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'

const Login = () => {

  const {loginUser} = useContext(Authcontext)


  return (
      <div className='app-body'>
        <div>
        <p>
            Hello there welcome to my website.For accessing the websites other features please login or register.
          </p>
          <form  onSubmit={loginUser}>
            <h3>Login Form</h3>
            <input  type='text' name='username' placeholder='Username'/> <br/>
            <input type='password' name='password' placeholder='Password'/><br/>
            <input type='submit'/>
          </form>
          <p>Don't have an account ? <Link to='/register'>Register</Link></p>
        </div>
      </div>
  )
}

export default Login