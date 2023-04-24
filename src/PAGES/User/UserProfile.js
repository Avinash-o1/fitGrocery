import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import Footer1 from '../../COMPONENTS/FOOTER/Footer1'
import Footer2 from '../../COMPONENTS/FOOTER/Footer2'
import SingleBanner from '../../COMPONENTS/BANNER/SingleBanner'
import './UserProfile.css'
import UserSidebar from '../../COMPONENTS/UserProfile/UserSidebar'
import AccountSetting from '../../COMPONENTS/UserProfile/AccountSetting'
import ChangePassword from '../../COMPONENTS/UserProfile/ChangePassword'
import YourOrder from '../../COMPONENTS/UserProfile/YourOrder'
import UserAddress from '../../COMPONENTS/UserProfile/UserAddress'
import LegalNotice from '../../COMPONENTS/UserProfile/LegalNotice'

const UserProfile = () => {

    const {activepage} = useParams()

  return (
    <div className='userprofile'>
        <Navbar/>
        <SingleBanner 
        title = 'My Profile'
        bannerImage = 'https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        <div className='userprofilein'>
            <div className='left'>
                <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
                {activepage === 'accountsetting' && <AccountSetting/>}
                {activepage === 'changepassword' && <ChangePassword/>}
                {activepage === 'yourorder' && <YourOrder/>}
                {activepage === 'address' && <UserAddress/>}
                {activepage === 'legalnotice' && <LegalNotice/>}

            </div>
        </div>
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default UserProfile