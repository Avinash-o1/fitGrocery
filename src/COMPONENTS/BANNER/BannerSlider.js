import React from 'react'
import './Bannerslider.css'
import Slider from 'react-slick'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'We deliver fresh vegetables & fruits at your doorstep',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
            button: 'htttps://www.google.com'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
            button: 'htttps://www.google.com'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 1
    };

    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                
                    {/* { data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })} */}
                    <div className='imagecont' key={data[0].id}>
                        <img src={data[0].image} alt='noimg' />
                        <div className='content'>
                            <h1>{data[0].title}</h1>
                            <span>{data[0].description}</span>
                            <button>Shop More</button>
                        </div>
                    </div>
                    <div className='imagecont' key={data[1].id}>
                    <img src={data[1].image} alt='noimg' />
                    <div className='content'>
                        <h1>{data[1].title}</h1>
                        <span>{data[1].description}</span>
                        <button>Shop More</button>
                    </div>
                </div>
                <div className='imagecont' key={data[2].id}>
                        <img src={data[2].image} alt='noimg' />
                        <div className='content'>
                            <h1>{data[2].title}</h1>
                            <span>{data[2].description}</span>
                            <button>Shop More</button>
                        </div>
                    </div>
                
            </Slider>
        </div>
    )
}

export default BannerSlider

