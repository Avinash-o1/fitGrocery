import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../ASSETS/ProductData';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import Footer1 from '../../COMPONENTS/FOOTER/Footer1';
import Footer2 from '../../COMPONENTS/FOOTER/Footer2';
import './ProductPage.css'
import ProductSlider from '../../COMPONENTS/Product/ProductSlider';

const ProductPage = () => {
  const { prodId } = useParams();
  const [images, setImages] = useState(null)
  const [productData, setProductData] = useState()
  const [activeImg, setActiveImg] = useState({})
  const [count, setCount] = useState(1)
  const [showReview, setShowReview] = useState(false)
  const [rating, setRating] = useState(0)
  const [reloadNavbar, setReloadNavbar] = useState(false)
  let arr = [1, 2, 3, 4, 5]

  const findData = () => {
    for (let i = 0; i < data.length; i++) {
      if (prodId == data[i].ProductId) {
        return data[i];
      }
    }
    return null;
  }

  const fetchProductData = async () => {
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

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if (cart) {
      let itemincart = cart.find(item => item.productData.ProductId === productData.ProductId)
      if (itemincart) {
        cart = cart.map(item => {
          if (item.productData.ProductId === productData.ProductId) {
            return {
              ...item,
              quantity: item.quantity + count
            }
          }
          else {
            return item
          }
        })
      }
      else {
        cart = [
          ...cart,
          {
            productData,
            quantity: count
          }
        ]
      }
    }
    else {
      cart = [
        {
          productData,
          quantity: count
        }
      ]
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    setReloadNavbar(!reloadNavbar)
  }

  useEffect(() => {
    fetchProductData();
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className='productpage'>
      {/* <h1>prdouct id is {prodId} </h1>
      <div>{JSON.stringify(productData)}</div> */}
      <Navbar reloadNavbar={reloadNavbar} />
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
              images?.map((item, i) => {
                return (
                  <div onClick={() => { setActiveImg(item) }} className='imgsmall'>
                    <img src={item.image} alt='product' className={activeImg?.id == item.id ? 'active' : ''} />
                  </div>
                )
              })
            }
          </div>
          <div className='imgbig'>
            <img src={activeImg?.image} alt='product' />
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
              <button onClick={() => { setCount(count > 1 ? count - 1 : count) }}>-</button>
              <p>{count}</p>
              <button onClick={() => { setCount(count < productData?.ProductQuantity ? count + 1 : count) }}>+</button>
            </div>
          </div>
          <div className='btncont'>
            <button onClick={addToCart}>Add to cart</button>
            <button onClick={() => { alert('Buy now is working') }}> Buy Now</button>
          </div>
        </div>
      </div>
      <div className='pc2'>
        <div className='tabs'>
          <button className={showReview ? 'inactive' : 'active'} onClick={() => { setShowReview(false) }}>Description</button>
          <button className={showReview ? 'active' : 'inactive'} onClick={() => { setShowReview(true) }} >Review</button>
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
                <div className='fromgroup'>
                  <label htmlFor=''>Rating</label>
                  <div className='rating'>
                    {
                      arr.map((value) => {
                        return (
                          <div className='star' onClick={() => { setRating(value) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={value <= rating ? "w-6 h-6 staractive" : "w-6 h-6 starinactive"}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>

                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </form>

              <div className='allreview'>
                <h1 className='head1'>Product Reviews</h1>
                {
                  productData?.ProductReviews?.map((item, i) => {
                    return (
                      <div className='review'>
                        <div className='reviewhead'>
                          <p className='name'>{item.Name}</p>
                          <div className='rating1'>
                            {
                              arr.map((value) => {
                                return (
                                  <div className='star' >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={value <= item.Rating ? "w-6 h-6 staractive" : "w-6 h-6 starinactive"}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                                  </div>
                                )
                              })
                            }
                          </div>
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
      <div className='slidercont'>
        <ProductSlider product={data} categoryName='Related Products' />
      </div>
      <div className='slidercont'>
        <ProductSlider product={data} categoryName='Explore More' />
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default ProductPage