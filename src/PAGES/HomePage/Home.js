import React from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import BannerSlider from '../../COMPONENTS/BANNER/BannerSlider'
import HomeCategories from '../../COMPONENTS/CATEGORIES/HomeCategories'
import AllProductSidebar from '../../COMPONENTS/Product/AllProductSidebar'
import Footer1 from '../../COMPONENTS/FOOTER/Footer1'
import Footer2 from '../../COMPONENTS/FOOTER/Footer2'

function Home() {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <AllProductSidebar/>
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Home