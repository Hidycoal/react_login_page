import React from 'react'
import './login.css'
import Aside from '../components/Aside'
import Main from '../components/Main'
const Login = () => {
  return (
    <div className='login'>
        <div className="body">
            <Aside />
            <Main />
        </div>
    </div>
  )
}

export default Login