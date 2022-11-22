import React from 'react'
import './Categories.css'
import {MdLocalShipping} from 'react-icons/md'
import {MdFoodBank} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {MdSupportAgent} from 'react-icons/md'
import img1 from '../../images/category-1.webp'
import img2 from '../../images/category-2.webp'
import img3 from '../../images/category-3.webp'
import img4 from '../../images/category-4.webp'
import img5 from '../../images/category-5.webp'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="wrapper">
            <div className="categories__infoContainer">
                <div className="categories__info">
                    <span className='categories__info-icon bg-1'><MdLocalShipping /></span>
                    <span className="categories__info-title">FREE SHIPPING</span>
                    <span className="categories__info-subtitle">ON ORDER OVER $100</span>
                </div>
                <div className="categories__info">
                    <span className='categories__info-icon bg-2'><MdFoodBank /></span>
                    <span className="categories__info-title">ALWAYS FRESH</span>
                    <span className="categories__info-subtitle">PRODUCT WELL PACKAGE</span>
                </div>
                <div className="categories__info">
                    <span className='categories__info-icon bg-3'><FaAward /></span>
                    <span className="categories__info-title">SUPERIOR QUALITY</span>
                    <span className="categories__info-subtitle">QUALITY PRODUCTS</span>
                </div>
                <div className="categories__info">
                    <span className='categories__info-icon bg-4'><MdSupportAgent /></span>
                    <span className="categories__info-title">SUPPORT</span>
                    <span className="categories__info-subtitle">24/7 SUPPORT</span>
                </div>
            </div>
            <div className="categories__container">
                <div className="categories__container-block">
                    <div className="categories__container-item">
                        <img src={img1} alt="" />
                        <a href="/">Fruits</a>
                    </div>
                    <div className="categories__container-item">
                        <img src={img2} alt="" />
                        <a href="/">Vegetables</a>
                    </div>
                </div>
                <div className="categories__container-info">
                    <div className="categoreis__container-info_text">
                        <h3>Vegetables</h3>
                        <p>Protect the health of every home</p>
                        <div className="btn">
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <img src={img5} alt="" />
                </div>
                <div className="categories__container-block">
                    <div className="categories__container-item">
                        <img src={img3} alt="" />
                        <a href="/">Juices</a>
                    </div>
                    <div className="categories__container-item">
                        <img src={img4} alt="" />
                        <a href="/">Dried</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories