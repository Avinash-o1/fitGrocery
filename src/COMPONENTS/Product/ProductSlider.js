import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import './ProductSlider.css'

const ProductSlider = ({ product, categoryName }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='productsliderout'>
      <h1> {categoryName} </h1>

      <Carousel responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        swipeable={true}
        draggable={true}
        infinite={true}
      >
        {product?.map((item) => {
          return (
            <ProductCard data={item} key={item.ProductId} />
          )
        })}
      </Carousel>
    </div>
  )
}

export default ProductSlider