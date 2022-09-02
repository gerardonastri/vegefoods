import React from 'react'
import './Footer.css'
import {MdLocationPin} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="wrapper">
        <div className="footer__info">
          <div className="footer__info-item">
            <h4>Vegefoods</h4>
            <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</span>
          </div>
          <div className="footer__info-item">
            <h4>Menu</h4>
            <div className="footer__info-item_links">
              <a href="/shop">Shop</a>
              <a href="/about">About</a>
              <a href="/">Journal</a>
              <a href="/contact">Contact US</a>
            </div>
          </div>
          <div className="footer__info-item">
            <h4>Help</h4>
            <div className="footer__info-item_links">
              <a href="/">Shipping Information</a>
              <a href="/">Returns & Exchange</a>
              <a href="/">Terms & Conditions</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          <div className="footer__info-item">
            <h4>Have a Questions?</h4>
            <div className="footer__info-item_flex">
              <MdLocationPin />
              <span>	203 Fake St. Mountain View, San Francisco, California, USA</span>
            </div>
            <div className="footer__info-item_flex">
                <BsFillTelephoneFill />
                <span>	+2 392 3929 210</span>
            </div>
            <div className="footer__info-item_flex">
              <GrMail />
              <span><a href="mailto:gerardonastri.dev@gmail.com">gerardonastri.dev@gmail.com</a></span>
            </div>
          </div>
        </div>
        <div className="footer__socials">
          <span className="footer__socials-item"><AiOutlineTwitter /></span>
          <span className="footer__socials-item"><FaFacebookF /></span>
          <span className="footer__socials-item"><BsInstagram /></span>
        </div>
        <div className="footer__copyright">
          Copyright ©2022 All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer