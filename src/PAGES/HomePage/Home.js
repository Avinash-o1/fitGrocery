import React from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import BannerSlider from '../../COMPONENTS/BANNER/BannerSlider'
import HomeCategories from '../../COMPONENTS/CATEGORIES/HomeCategories'
import AllProductSidebar from '../../COMPONENTS/Product/AllProductSidebar'

function Home() {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <AllProductSidebar/>
        <h1>HOME</h1>
    </div>
  )
}

export default Home