import React from 'react'
import './main.css'
const Main = () => {
  return (
    <div className='main'>
        <div className="main__wrapper">
            <div className="main__header">
                <p>Login to your account</p>
            </div>
            <div className="main__input">
                <input className='input' type="text" placeholder='Enter Email'/>
                <input className='input' type="text" placeholder='Enter Password'/>
            </div>
           <div className="forget__section">
            <input type="checkbox" className="box" id="" />
            <p className='rem'>Remember me</p>
            <p><a href="#" className='forget'>Forget Password</a></p>
           </div>
           <a href="" className='btn'>Login</a>
        </div>
    </div>
  )
}

export default Main