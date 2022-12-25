import React from 'react'



const Login = () => {
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
        <form>
          <h3>Login Form</h3>
          <input type='text' placeholder='Username'/>
          <input type='text' placeholder='Password'/>
          <input type='submit'/>
        </form>
        <p>Don't have an account ? Register now</p>
      </div>
    </div>
  )
}

export default Login