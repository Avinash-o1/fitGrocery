import React from 'react'
import AllProduct from './AllProduct.js'
import Sidebar from './Sidebar.js'
import './AllProductSidebar.css'

const AllProductSidebar = () => {
  return (
    <div className='product_sidebar'>
        <Sidebar/>
        <AllProduct/>
    </div>
  )
}

export default AllProductSidebar