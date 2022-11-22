import React from 'react'
import { useState, useEffect } from 'react'
import './Featured.css'
import img1 from '../../images/featured-1.webp'
import img2 from '../../images/featured-2.webp'

const Featured = () => {
    const [currentSlider, setCurrentSlider] = useState(0)
    const slider = [
        {
            title: "100% Fresh & Organic Foods",
            subtitle: "We deliver organic vegetables & fruits",
            img: img1
        },
        {
            title: "We serve Fresh Vegestables & Fruits",
            subtitle: "We deliver organic vegetables & fruits",
            img: img2
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlider((v) => {
            return v === 0 ? 1 : 0;
          });
        }, 5000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='featured'>
        <div className="overlay" />
        <div className={currentSlider === 0 ? 'slider show' : 'slider'}>
            <img src={slider[currentSlider].img} alt="" />
            <div className="featured__text">
                <h1 className="featured__title">{slider[currentSlider].title}</h1>
                <h3 className="featured__subtitle">{slider[currentSlider].subtitle}</h3>
                <div className="featured__btn">
                    <button>View Details</button>
                </div>
            </div>
        </div>
        <div className={currentSlider === 1 ? 'slider show' : 'slider'}>
            <img src={slider[currentSlider].img} alt="" />
            <div className="featured__text">
                <h1 className="featured__title">{slider[currentSlider].title}</h1>
                <h3 className="featured__subtitle">{slider[currentSlider].subtitle}</h3>
                <div className="featured__btn">
                    <button>View Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured