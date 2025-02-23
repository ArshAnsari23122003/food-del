import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto pariatur, commodi cupiditate amet cumque expedita alias quaerat delectus quibusdam, modi voluptas magnam aperiam itaque. Dicta possimus alias quos unde. Sunt?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+123-456-789</li>
                <li>contact@gmail.com</li>
              </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ tomato.com</p>
    </div>
  )
}

export default footer
