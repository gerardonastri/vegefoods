import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import {axiosReq} from '../../utils/apiCalls'
import img1 from '../../images/featured-1.webp'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const handleClick = async () => {
    if(name.length === 0 || email.length === 0 || subject.length === 0 || content.length === 0){
      setError('Compile all the fields')
    } else {
      try {
        const res = await axiosReq.post('message', {
          name,
          email,
          subject,
          content
        })
        window.location.reload()
      } catch (error) {
        setError(error)
      }
    }
  }

  return (
    <div className='contact'>
      <Navbar />
      <div className="shop__hero">
        <img src={img1} alt="" />
        <h1>Contact us</h1>
      </div>
      <div className="contact__content">
        <div className="wrapper">
          <div className="contact__info">
            <div className="contact__info-item">
              <span>Address: 198 West 21th Street, Suite 721 New York NY 10016</span>
            </div>
            <div className="contact__info-item">
              <span>Phone: <a href="tel://12345678920">+ 1235 2355 98</a></span>
            </div>
            <div className="contact__info-item">
              <span>Email: <a href="mailto:gerardonastri.dev@mail.com">gerardnastri.dev@gmail.com</a></span>
            </div>
            <div className="contact__info-item">
              <span>Website: <a href="/">yourwebsite.com</a></span>
            </div>
          </div>
          <div className="contact__action">
            <div className="contact__map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325248.61715134716!2d-74.13589043413907!3d40.766840966757925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1661595822038!5m2!1sit!2sit" width="530" height="550" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact__form">
              <input type="text" name="" id="" placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
              <input type="email" name="" id="" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}  />
              <input type="text" name="" id="" placeholder='Subject' onChange={(e) => setSubject(e.target.value)}  />
             <textarea name="" id="" cols="30" rows="10" placeholder='Message' onChange={(e) => setContent(e.target.value)} ></textarea>
             <div><button onClick={handleClick}>Send Message</button></div>
              <div className="contact__form-errors">
                <span>{error}</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact