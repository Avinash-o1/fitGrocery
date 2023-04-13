import React from 'react'
import './Sidebar.css'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'

const Sidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Category 1'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Category 2'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Category 3'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Category 4'
        },
        {
            id: 5,
            categoryimage: img1,
            categoryname: 'Category 5'
        },
        {
            id: 6,
            categoryimage: img2,
            categoryname: 'Category 6'
        },
        {
            id: 7,
            categoryimage: img3,
            categoryname: 'Category 7'
        },
        {
            id: 8,
            categoryimage: img4,
            categoryname: 'Category 8'
        }
    ]

  return (
    <div className='category-sidebar'>
        {
            data.map((item)=>{
                return(
                    <div className='category'>
                        <img src={item.categoryimage} alt={item.categoryname}/>
                        <p>{item.categoryname}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Sidebar