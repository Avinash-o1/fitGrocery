import React from 'react'
import './SingleBanner.css'

const SingleBanner = ({title , bannerImage}) => {
  return (
    <div className='singlebanner'>
        <div className='bannerimgfilter'></div>
        <img className='bannerimg' src={bannerImage} alt='noimg' />
        <div className='bannerheading'>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default SingleBanner