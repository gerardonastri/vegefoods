import React from 'react'
import './Categories.css'
import {MdLocalShipping} from 'react-icons/md'
import {MdFoodBank} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {MdSupportAgent} from 'react-icons/md'

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
                        <img src="https://preview.colorlib.com/theme/vegefoods/images/xcategory-1.jpg.pagespeed.ic.alxe1GXuAu.webp" alt="" />
                        <a href="/">Fruits</a>
                    </div>
                    <div className="categories__container-item">
                        <img src="https://preview.colorlib.com/theme/vegefoods/images/xcategory-2.jpg.pagespeed.ic.5035OoKGCA.webp" alt="" />
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
                    <img src="https://preview.colorlib.com/theme/vegefoods/images/xcategory.jpg.pagespeed.ic.JIYFOwf8jy.webp" alt="" />
                </div>
                <div className="categories__container-block">
                    <div className="categories__container-item">
                        <img src="https://preview.colorlib.com/theme/vegefoods/images/xcategory-3.jpg.pagespeed.ic.IebYHvpTTo.webp" alt="" />
                        <a href="/">Juices</a>
                    </div>
                    <div className="categories__container-item">
                        <img src="https://preview.colorlib.com/theme/vegefoods/images/xcategory-4.jpg.pagespeed.ic.mstLsR7ycw.webp" alt="" />
                        <a href="/">Dried</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories