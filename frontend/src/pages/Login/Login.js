import React, { useState } from 'react';
import './login.css'
import {Link } from 'react-router-dom'

const Login = () =>{

    const [inputType, setInputType] = useState('email');
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      setInputValue('');
    };

    const toggleInputType = () => {
      setInputType(inputType === 'email' ? 'aadhar' : 'email');
      setInputValue('');
    };

    return(
        <div className='login-body'>
            <div className="login">

            <div className="login-picture">
                <img src="../../assets/img/homeaffairs.png"></img>
            </div>
            <div className="login-content">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>

                    {inputType === 'email' ? (
                                <div>
                                    <label>Email Address: </label>
                                    <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    />
                                </div>
                        ) : (
                                <div>
                                    <label>Aadhar Number:</label>
                                    <input
                                    type="text"
                                    placeholder="Enter your Aadhar number"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    />
                                    <label>Upload Aadhar:</label>
                                    <input
                                    type='file'
                                    />
                                </div>
                    )}
                    <label>Password: </label>
                    <input
                    type='password'
                    placeholder='Enter Password'/>
                    <br></br>
                    <button type="submit">Login</button>
                    <p>___________________ OR ____________________</p>
                    <button onClick={toggleInputType}>
                        {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}
                    </button>
                </form>

                <p>Don't have account ? <Link to='/signup'>Signup</Link></p>
            </div>

        </div>
        </div>
    )
}

export default Login;