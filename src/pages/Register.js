import React from 'react'

const Register = () => {
  return (
    <div>
      <h3>Register</h3>
      <form>
        <input type='text' placeholder='First Name' name='first_name' /> <br/>
        <input type='text' placeholder='Last Name' name='last_name' /> <br/>
        <input type='text' placeholder='Email' name='email' /> <br/>
        <input type='text' placeholder='Username' name='username' /> <br/> 
        <input type='password' placeholder='Password' name='password' /> <br/>
        <input type='submit' />
      </form>
    </div>
  )
}

export default Register