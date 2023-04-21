import React from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import './Authpage.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='authpage'>
            <Navbar />
            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' alt='login'></img>
                <div className='authform'>
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='name' id='fname'></input>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='name' id='lname'></input>
                        </div>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'></input>
                    </div>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='cpassword'>Confirm Password</label>
                            <input type='password' id='cpassword' />
                        </div>
                    </div>
                    <Link to='/login' className='stylenone' >
                        <p> Already have an account ?</p>
                    </Link>
                    <Link to='/' className='stylenone'>
                        <button className='btn'>Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup