import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";


import './button.css'
const Button = () => {
  return (
    <div className='button'>
        {/* <div className="social__icons">
            <a href="facebook.com" target='_blank'><button className='fb'><span className='spanfb'><TiSocialFacebook className='socials'/></span>
           <span> Sign With Facebook</span></button></a>
            <a href="twitter.com" target='_blank'><button className='twitter'><FaTwitter className='socials'/><span> Sign With Twiter</span></button></a>
            <a href="google.com" target='_blank'><button className='google'><FaGooglePlusG className='socials'/><span> Sign With Google</span></button></a>
        </div> */}
        <div className="btn__wrapper">
            {/* <div className="div__btn">
                <div className='content'>
                    <div className="icon"><TiSocialFacebook /></div>
                    <div className="text">Sign With Facebook</div>
                </div>
            </div> */}
            <a href="">
                <div className="div__btn fb">
                <div className='content'>
                    <div className="icon"><TiSocialFacebook /></div>
                    <div className="text">Sign With Facebook</div>
                </div>
            </div>
            </a>
            <a href="">
                <div className="div__btn twitter">
                <div className='content'>
                    <div className="icon"><FaTwitter /></div>
                    <div className="text">Sign With Twitter</div>
                </div>
            </div>
            </a>
            <a href="" >
                <div className="div__btn google">
                <div className='content'>
                    <div className="icon google"><FaGooglePlusG /></div>
                    <div className="text">Sign With Google</div>
                </div>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Button