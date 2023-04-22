import React from 'react'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar'
import './Authpage.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='authpage'>
            <Navbar reloadNavbar={false}/>
            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' alt='login'></img>
                <div className='authform'>
                    <h1>Login</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'></input>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                    <Link to='/forgotpswd' className='stylenone' >
                        <p> Forgot Password</p>
                    </Link>
                    <Link to='/' className='stylenone'>
                        <button className='btn'>Login</button>
                    </Link>
                    <h2 className='or'>OR</h2>
                    <Link to='/signup' className='stylenone'>
                        <button className='btn'>Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login