import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/AuthContext'

const Login = () => {

  const {loginUser} = useContext(Authcontext)


  return (
      <div className='app-body'>
        <div>
        <h3 className='login-header'>
            Hello there welcome to my website.For accessing the websites other features please login or register.
          </h3>
          <form className='login-form' onSubmit={loginUser}>
            <h3>Login Form</h3>
            <input className='login-form-item' type='text' name='username' placeholder='Username'/> <br/>
            <input className='login-form-item' type='password' name='password' placeholder='Password'/><br/>
            <input className='login-form-button' type='submit'/>
          </form>
          <p className='login-form-footer'>Don't have an account ? <Link className='login-form-link' to='/register'>Register</Link></p>
        </div>
      </div>
  )
}

export default Login