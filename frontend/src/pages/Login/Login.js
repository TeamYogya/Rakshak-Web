// import React, { useState } from 'react';
// import './login.css'
// import {Link } from 'react-router-dom'
//
// const Login = () =>{
//
//     const [inputType, setInputType] = useState('email');
//     const [inputValue, setInputValue] = useState('');
//
//
//     const handleInputChange = (e) => {
//       setInputValue(e.target.value);
//     };
//
//     const handleSubmit = (e) => {
//       e.preventDefault();
//
//       setInputValue('');
//     };
//
//     const toggleInputType = () => {
//       setInputType(inputType === 'email' ? 'aadhar' : 'email');
//       setInputValue('');
//     };
//
//     return(
//         <div className='login-body'>
//             <div className="login">
//
//             <div className="login-picture">
//                 <img src="../../assets/img/homeaffairs.png"></img>
//             </div>
//             <div className="login-content">
//                 <h2>Login</h2>
//                 <form className="login-form" onSubmit={handleSubmit}>
//
//                     {inputType === 'email' ? (
//                                 <div>
//                                     <label>Email Address: </label>
//                                     <input
//                                     type="email"
//                                     placeholder="Enter your email address"
//                                     value={inputValue}
//                                     onChange={handleInputChange}
//                                     />
//                                 </div>
//                         ) : (
//                                 <div>
//                                     <label>Aadhar Number:</label>
//                                     <input
//                                     type="text"
//                                     placeholder="Enter your Aadhar number"
//                                     value={inputValue}
//                                     onChange={handleInputChange}
//                                     />
//                                     <label>Upload Aadhar:</label>
//                                     <input
//                                     type='file'
//                                     />
//                                 </div>
//                     )}
//                     <label>Password: </label>
//                     <input
//                     type='password'
//                     placeholder='Enter Password'/>
//                     <br></br>
//                     <button type="submit">Login</button>
//                     <p>___________________ OR ____________________</p>
//                     <button onClick={toggleInputType}>
//                         {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}
//                     </button>
//                 </form>
//
//                 <p>Don't have account ? <Link to='/signup'>Signup</Link></p>
//             </div>
//
//         </div>
//         </div>
//     )
// }
//
// export default Login;

import React, {useState} from 'react';
// import './signup.css';
import {Link} from 'react-router-dom';
import {google, HomeAffairs, loginsignin} from "../Dashboard/TrialJSON/images";
import {BiHide, BiShow} from "react-icons/bi";
import {MdOutlineUploadFile} from "react-icons/md";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [aadhaar, setAadhaar] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('email');
    const [showPassword, setShowPassword] = useState(false);


    const handleInputChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;

        switch (inputName) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'aadhaar':
                setAadhaar(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', {name, email, aadhaar, password});
        setName('');
        setEmail('');
        setAadhaar('');
        setPassword('');
    };

    const toggleInputType = () => {
        setInputType(inputType === 'email' ? 'aadhar' : 'email');
    };

    return (
        <div className="flex font-sans h-screen">
            <div className={'fixed flex flex-row right-4 top-4'}>
                <p className={'text-md text-dark_gray font-black'}>New here?&nbsp;&nbsp;</p>
                <p className={'text-md font-black text-purple_primary'}><Link to='/signup'>Sign Up</Link></p>
            </div>
            <div className="w-7/12 flex justify-center items-center max-md:w-1/2">
                <div className="flex flex-col items-center justify-center h-screen mr-10">
                    <img src={HomeAffairs} alt="Home Affairs Logo" className="h-auto w-40 mb-2"/>
                    <img src={loginsignin} alt="Login Signin Logo"
                         className="rounded-3xl w-[500px] max-w-screen-xl h-auto"/>
                </div>
            </div>
            <div className="w-6/12 flex justify-center items-center max-md:w-1/2">
                <div className="flex flex-col items-center justify-center h-screen mr-10">
                    <p className={'text-2xl font-black m-3 mb-10'}>Login to Rakshak</p>
                    <div className="flex items-center align-center justify-center">
                        <button
                            className="flex p-4 w-96 my-2 justify-center shadow-xl font-black rounded-3xl items-center">
                            <img src={google} alt="Google Logo" className="h-5 w-5 mr-2"/>
                            Sign inx with Google
                        </button>
                    </div>
                    <p className={'text-md my-2 text-dark_gray font-black'}>Or</p>
                    <form onSubmit={handleSubmit}>
                        {inputType === 'email' ? (
                            <div>
                                <input
                                    className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${email ? 'font-black' : 'placeholder:font-black'}`}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ) : (
                            <div className="relative">
                                <input
                                    className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${aadhaar ? 'font-black' : 'placeholder:font-black'}`}
                                    type="text"
                                    name="aadhaar"
                                    placeholder="Aadhaar Number"
                                    value={aadhaar}
                                    onChange={handleInputChange}
                                />
                                <label
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-black px-4 py-2 rounded-md cursor-pointer">
                                    <MdOutlineUploadFile className={'w-6 h-6 text-dark_gray'}/>
                                    <input
                                        type="file"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        )}
                        <div className="relative">
                            <input
                                className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${password ? 'font-black' : 'placeholder:font-black'}`}
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"  // Add this line to prevent form submission
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-black px-4 py-2 rounded-md cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <BiShow className={'w-6 h-6 text-dark_gray'}/> : <BiHide className={'w-6 h-6 text-dark_gray'}/> }
                            </button>
                        </div>


                        <div className="flex items-center align-center justify-center">
                            <button type={'submit'}
                                    className="flex p-3.5 my-4 shadow-xl w-56 text-white bg-purple_primary justify-center font-black rounded-3xl items-center">
                                Get Started
                            </button>
                        </div>
                        <button className={'text-purple_primary font-black'} onClick={toggleInputType}>
                            {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;