import React from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import Footer1 from '../../COMPONENTS/FOOTER/Footer1'
import Footer2 from '../../COMPONENTS/FOOTER/Footer2'
import SingleBanner from '../../COMPONENTS/BANNER/SingleBanner'

const Cart = () => {
  return (
    <div>
        <Navbar/>
        <SingleBanner 
        title = 'My Cart'
        bannerImage = 'https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Cart