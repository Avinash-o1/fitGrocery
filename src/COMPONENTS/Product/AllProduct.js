import React from 'react'
import './AllProduct.css'
import ProductCard from './ProductCard'
import data from '../../ASSETS/ProductData.js'

const AllProduct = () => {
  return (
    <div className='AllProducts'>
      <h2>AllProduct</h2>
      <div className='Products'>
        {
          data.map((item, index) => {
            return (
              <ProductCard data={item} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct