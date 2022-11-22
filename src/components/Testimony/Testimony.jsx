import React, {useRef} from 'react'
import './Testimony.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img from '../../images/person-1.webp'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="testimonies">
    <div className="testimony">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>,
    <div className="testimony notres">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>
    <div className="testimony notres">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>
  </div>,
  <div className="testimonies">
    <div className="testimony ">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>,
    <div className="testimony notres">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>
    <div className="testimony notres">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>
  </div>,
  <div className="testimonies">
    <div className="testimony">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>,
    <div className="testimony notres">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>
    <div className="testimony notres">
      <img src={img} alt="" />
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <h3>Garreth Smith</h3>
      <span>WEB DEVELOPER</span>
    </div>
  </div>,
];

const Testimony = () => {

   
  return (
    <div className="testimonyContainer">
      <AliceCarousel  mouseTracking disableButtonsControls items={items} /> 
    </div>
  )
}

export default Testimony