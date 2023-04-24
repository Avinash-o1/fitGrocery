import React from 'react'

const ChangePassword = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Change Password</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='oldPass'>Old Password <span>*</span></label>
          <input type='password' name='name' id='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='newPass'>New Password <span>*</span></label>
          <input type='password' name='phone' id='phone'

          />
        </div>

        <div className='form-group'>
          <label htmlFor='confirmPass'>Confirm Password <span>*</span></label>
          <input type='password' name='email' id='email'

          />
        </div>

      
      </div>

      <button className='mainbutton1'>Save Changes</button>
    </div>
  )
}

export default ChangePassword