import React from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import BannerSlider from '../../COMPONENTS/BANNER/BannerSlider'
import HomeCategories from '../../COMPONENTS/CATEGORIES/HomeCategories'

function Home() {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <h1>HOME</h1>
    </div>
  )
}

export default Home