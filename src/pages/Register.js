import React from 'react'
import { useNavigate } from 'react-router'


const Register = () => {

  const navigate = useNavigate()
  
  const userRegister = async(e ) => {
    // Preventing to make request when blank submit
    e.preventDefault()
    // requesting the site and sending our credentials.
    const response = await fetch('https://django-api.up.railway.app/register/',{
            method:"POST",
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify({"username":e.target.username.value, "password":e.target.password.value, 'password2':e.target.password.value,'email':e.target.email.value})
        })

        const data = await response.json()
        // checking conditions.
        if (response.status === 201){
            navigate('/login')
        }else{
          // need to show errors in this
          alert('Something went wrong')
        }
    }

  return (
    <div className='app-body'>
      <div className='register-form'>
      <h3>Register</h3>
      <form onSubmit={userRegister}>
        <input className='register-item' type='text' placeholder='Email' name='email' /> <br/>
        <input className='register-item' type='text' placeholder='Username' name='username' /><br/>
        <input className='register-item' type='text' placeholder='Password' name='password' /><br/>
        <input className='register-item'  type='text' placeholder='Confirm Password' name='password2' /><br/>
        <input className='register-button'  type='submit' />
      </form>
      </div>
    </div>
  )
}

export default Register