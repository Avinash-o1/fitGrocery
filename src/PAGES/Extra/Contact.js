import React, { useState } from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import Footer1 from '../../COMPONENTS/FOOTER/Footer1'
import Footer2 from '../../COMPONENTS/FOOTER/Footer2'
import SingleBanner from '../../COMPONENTS/BANNER/SingleBanner'

const Contact = () => {
    const [rating, setRating] = useState(0)
    let arr = [1, 2, 3, 4, 5]


    return (
        <div className='extrapage'>
            <Navbar />
            <SingleBanner
                title='Contact Us'
                bannerImage='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
            <div className='pgleft pgcommon'>
                <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />

                <div>
                    <h1>Our Story</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
            </div>
            <div className='pgright pgcommon'>
                <img src='https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='noimg' />
                <div>
                    <h1>Who are we</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
            </div>

            <form className='extrapageform'>
                <h1 className='formheading'>Get in Touch</h1>
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

            <Footer1 />
            <Footer2 />
        </div>
    )
}

export default Contact