import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="wrapper">
            <div className="newsletter__flex">
                <div className="newsletter__text">
                    <h3>Subcribe to our Newsletter</h3>
                    <span>Get e-mail updates about our latest shops and special offers</span>
                </div>
                <div className="newsletter__form">
                    <input type="text" name="" id="" placeholder='Enter email address' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter