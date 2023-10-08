import React, { useState } from 'react';
import './signup.css';
import {Link } from 'react-router-dom'
const Signup = () => {
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

  return (
    <div className="signup-body">
      <div className="signup">
        <div className="signup-picture">
          <img src="./images/homeaffairs.png" alt="Home Affairs Logo" />
        </div>
        <div className="signup-content">
          <h2>Signup</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
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
              </div>
            )}
            <label>Password: </label>
            <input type="password" placeholder="Enter Password" />
            <br />
            <button type="submit">Signup</button>
            <p>_________________________ OR _________________________</p>
            <button onClick={toggleInputType}>
              {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}
            </button>
          </form>
          <p>Already have an account !! <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
