import React from 'react'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import './HomeCategories.css'

const HomeCategories = () => {
  return (
    <div className='HomeCategories'>
        <div className='container'>
            <img src={img1} alt='first_category'></img>
            <div className='content'>
                <h2>Vegetables at your doorstep</h2>
                <p>Shop vegetables now</p>
            </div>
        </div>
        <div className='container'>
            <img src={img2} alt='second_category'></img>
            <div className='content'>
                <h2>Vegetables at your doorstep</h2>
                <p>Shop vegetables now</p>
            </div>
        </div>
        <div className='container'>
            <img src={img3} alt='third_category'></img>
            <div className='content'>
                <h2>Vegetables at your doorstep</h2>
                <p>Shop vegetables now</p>
            </div>
        </div>
        <div className='container'>
            <img src={img4} alt='fourth_category'></img>
            <div className='content'>
                <h2>Vegetables at your doorstep</h2>
                <p>Shop vegetables now</p>
            </div>
        </div>
    </div>
  )
}

export default HomeCategories