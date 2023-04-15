import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../ASSETS/ProductData';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import Footer1 from '../../COMPONENTS/FOOTER/Footer1';
import Footer2 from '../../COMPONENTS/FOOTER/Footer2';
import './ProductPage.css'

const ProductPage = () => {
  const { prodId } = useParams();
  const [images, setImages] = useState(null)
  const [productData, setProductData] = useState()
  const [activeImg, setActiveImg] = useState({})
  const [count, setCount] = useState(1)
  const [showReview, setShowReview] = useState(false)

  const findData = () => {
    for (let i = 0; i < data.length; i++) {
      if (prodId == data[i].ProductId) {
        return data[i];
      }
    }
    return null;
  }

  const fetchProductData = async() => {
    let temp = {
      'code': 200,
      'status': 'success',
      'data': findData(),
    }
    if (temp.code == 200) {
      setImages(temp.data.ProductImage)
      setProductData(temp.data)
      setActiveImg(temp.data.ProductImage[0])
    }
  }

  useEffect(() => {
    fetchProductData();
  },[] )


  return (
    <div className='productpage'>
      {/* <h1>prdouct id is {prodId} </h1>
      <div>{JSON.stringify(productData)}</div> */}
      <Navbar />
      <div className='pc1'>
        <Link to='/'>
          <button className='goback'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Go Back
          </button>
        </Link>

        <div className='c11'>
          <div className='imgset'>
            {
              images?.map((item, i) =>{
                return(
                  <div  onClick={()=>{setActiveImg(item)}} className='imgsmall'>
                    <img src={item.image} alt='product' className= {activeImg?.id == item.id ? 'active' : ''}/>
                  </div>
                )
              })
            }
          </div>
          <div className='imgbig'>
            <img src={activeImg?.image} alt='product'/>
          </div>
        </div>
        <div className='c12'>
          <h1 className='head1'>{productData?.ProductName}</h1>
          <div className='c121'>
            <p className='price'>
              ${productData?.SalesPrice * count}
              <span>${productData?.ProductPrice * count}</span>
            </p>
            <div className='incrdecr'>
              <button onClick={() => { setCount(count > 1 ? count - 1 : count ) }}>-</button>
              <p>{count}</p>
              <button onClick={() => { setCount(count < productData?.ProductQuantity ? count + 1 : count) }}>+</button>
            </div>
          </div>
          <div className='btncont'>
            <button onClick={()=>{alert('added to cart')}}>Add to cart</button>
            <button onClick={()=>{alert('Buy now is working')}}> Buy Now</button>
          </div>
        </div>
      </div>
      <div className='pc2'>
        <div className='tabs'>
          <button className={showReview ? 'inactive' : 'active'} onClick={()=>{setShowReview(false)}}>Description</button>
          <button className={showReview ? 'active' : 'inactive'} onClick={()=>{setShowReview(true)}} >Review</button>
        </div>
        {
          !showReview ? 
          <p className='desc'>{productData?.ProductDescription}</p> 
          : <div className='reviewcont'>
            <form>
              <div className='fromgroup'>
                <label htmlFor=''>Name</label>
                <input type="text"></input>
              </div>
              <div className='fromgroup'>
                <label htmlFor=''>Email</label>
                <input type="email"></input>
              </div>
              <div className='fromgroup'>
                <label htmlFor=''>Review</label>
                <textarea cols="30" rows="10"></textarea>
              </div>
              <button>Submit</button>
            </form>

            <div className='allreview'>
            <h1 className='head1'>Product Reviews</h1>
              {
                productData?.ProductReviews?.map((item,i)=>{
                  return(
                    <div className='review'>
                      <div className='reviewhead'>
                        <p className='name'>{item.Name}</p>
                        <span className='date'>{item.Date}</span>
                      </div>
                      <div className='reviewbody'>
                        {item.Review}
                      </div>
                    </div>
                    
                  )
                })
              }
            </div>
          </div>
        }
      </div>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default ProductPage