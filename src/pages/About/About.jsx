import React, { useState }  from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import Testimony from '../../components/Testimony/Testimony'
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import img1 from '../../images/featured-1.webp'
import aboutImg from '../../images/about.webp'

const About = () => {
    const [showVideo, setShowVideo] = useState(false)

  return (
    <div className='about'>
        <Navbar />
        <div className="shop__hero">
            <img src={img1} alt="" />
            <h1>about us</h1>
        </div>
        <div className="about__content">
            <div className="wrapper">
                <div className="videoPlayer">
                    <img src={aboutImg} alt="" />
                    <span onClick={() => setShowVideo(true)}><BsFillPlayFill /></span>
                </div>
                <div className="about__info">
                    <h1>Welcome to Vegefoods an eCommerce website</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                    But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                    <button>Shop now</button>
                </div>
            </div>
        </div>
        <div className="featuredProducts">
            <div className="wrapper">
            <span className="featuredProducts__subtitle">Testimony</span>
            <h1 className="featuredProducts__title">Our satisfied customer says</h1>
            <p className="featuredProducts__desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <div className="testimony__container">
                <Testimony />
            </div>
            </div>
        </div>
        {showVideo && (
            <div className="video">
                <video src="https://firebasestorage.googleapis.com/v0/b/netflix-99976.appspot.com/o/items%2F1638974588365trailerMr.%20Robot%20-%20La%20realta%CC%80%20del%20mondo%20in%20cui%20viviamo.mp4?alt=media&token=9af8e53d-7476-41c0-9818-e7b0f4fb9577" controls></video>
                <span onClick={() => setShowVideo(false)} className="closeVideo"><AiOutlineClose /></span>
            </div>
        )}
        {showVideo && <div className="overlay" />}
        <Newsletter />
        <Footer />
    </div>
  )
}

export default About