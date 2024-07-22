import React from 'react'
import './aside.css'
import Button from './Button'
const Aside = () => {
  return (
    <div className='aside'>
        <div className="aside__heading">
            <h1 className='heading'>SMART</h1>
            <p className='sub__heading'>Login using media to get <br /> quick access</p>
        </div>
        <div className="aside__button__wrapper">
            <div className="aside__button">
                <Button />
            </div>
        </div>
        
    </div>
  )
}

export default Aside