// // import React, {useState} from 'react';
// // import './signup.css';
// // import {Link} from 'react-router-dom'
// // import {google, HomeAffairs, loginsignin} from "../Dashboard/TrialJSON/images";
// //
// // const Signup = () => {
// //     const [inputType, setInputType] = useState('email');
// //     const [inputValue, setInputValue] = useState('');
// //
// //
// //     const handleInputChange = (e) => {
// //         setInputValue(e.target.value);
// //     };
// //
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //
// //         setInputValue('');
// //     };
// //
// //     const toggleInputType = () => {
// //         setInputType(inputType === 'email' ? 'aadhar' : 'email');
// //         setInputValue('');
// //     };
// //
// //     return (
// //
// //         <div className="flex font-sans h-screen">
// //             <div className={'fixed flex flex-row right-4 top-4'}>
// //                 <p className={'text-md text-dark_gray font-black'}>Already a member?&nbsp;&nbsp;</p>
// //                 <p className={'text-md font-black text-purple_primary'}><Link to='/login'>Login</Link></p>
// //             </div>
// //             <div className="w-7/12 flex justify-center items-center max-md:w-1/2">
// //                 <div className="flex flex-col items-center justify-center h-screen mr-10">
// //                     <img src={HomeAffairs} alt="Home Affairs Logo" className="h-auto w-40 mb-2"/>
// //                     <img src={loginsignin} alt="Login Signin Logo"
// //                          className="rounded-3xl w-[500px] max-w-screen-xl h-auto"/>
// //                 </div>
// //             </div>
// //             <div className="w-6/12 flex justify-center items-center max-md:w-1/2">
// //                 <div className="flex flex-col items-center justify-center h-screen mr-10">
// //                     <p className={'text-2xl font-black m-3 mb-10'}>Create a Rakshak account</p>
// //                     <div className="flex items-center align-center justify-center">
// //                         <button
// //                             className="flex p-4 w-96 my-2 justify-center shadow-xl font-black rounded-3xl items-center">
// //                             <img src={google} alt="Google Logo" className="h-5 w-5 mr-2"/>
// //                             Sign up with Google
// //                         </button>
// //                     </div>
// //                     <p className={'text-md my-2 text-dark_gray font-black'}>Or</p>
// //                     <form onSubmit={handleSubmit}>
// //                         <div>
// //                             <input
// //                                 className={'p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl'}
// //                                 type="name"
// //                                 placeholder="Name"
// //                                 value={inputValue}
// //                                 onChange={handleInputChange}
// //                             />
// //                         </div>
// //                         {inputType === 'email' ? (
// //                             <div>
// //                                 <input
// //                                     className={'p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl'}
// //                                     type="email"
// //                                     placeholder="Email"
// //                                     value={inputValue}
// //                                     onChange={handleInputChange}
// //                                 />
// //                             </div>
// //                         ) : (
// //                             // <div>
// //                             //     <input
// //                             //         className={'p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl'}
// //                             //         type="text"
// //                             //         placeholder="Aadhaar Number"
// //                             //         value={inputValue}
// //                             //         onChange={handleInputChange}
// //                             //     />
// //                             //     <input
// //                             //         type='file'
// //                             //     />
// //                             // </div>
// //
// //                             <div className="relative">
// //                                 <input
// //                                     className="p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl"
// //                                     type="text"
// //                                     placeholder="Aadhaar Number"
// //                                     value={inputValue}
// //                                     onChange={handleInputChange}
// //                                 />
// //                                 <label
// //                                     className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-black px-4 py-2 rounded-md cursor-pointer">
// //                                     $
// //                                     <input
// //                                         type="file"
// //                                         className="hidden"
// //                                     />
// //                                 </label>
// //                             </div>
// //
// //
// //
// //
// //                             // <div className="relative">
// //                             //     <input
// //                             //         className="p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl"
// //                             //         type="text"
// //                             //         placeholder="Aadhaar Number"
// //                             //         value={inputValue}
// //                             //         onChange={handleInputChange}
// //                             //     />
// //                             //     <input
// //                             //         className="hidden"
// //                             //         type="file"
// //                             //         onChange={handleFileChange}  // Define a function to handle file changes
// //                             //         ref={fileInputRef}  // Use a ref to interact with the file input
// //                             //     />
// //                             //     <button
// //                             //         className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-white px-4 py-2 rounded-md"
// //                             //         onClick={() => fileInputRef.current.click()}
// //                             //     >
// //                             //         Choose a File
// //                             //     </button>
// //                             // </div>
// //
// //                         )}
// //                         <div>
// //                             <input
// //                                 className={'p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl'}
// //                                 type="password"
// //                                 placeholder="Password"
// //                                 value={inputValue}
// //                                 onChange={handleInputChange}
// //                             />
// //                         </div>
// //                         <div className="flex items-center align-center justify-center">
// //                             <button type={'submit'}
// //                                     className="flex p-3.5 my-4 shadow-xl w-56 text-white bg-purple_primary justify-center font-black rounded-3xl items-center">
// //                                 Sign up with Google
// //                             </button>
// //                         </div>
// //                         <button className={'text-purple_primary font-black'} onClick={toggleInputType}>
// //                             {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}
// //                         </button>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //
// //
// //         // <div className="signup-body">
// //         //   <div className="signup">
// //         //     <div className="signup-picture">
// //         //       <img src="./images/homeaffairs.png" alt="Home Affairs Logo" />
// //         //     </div>
// //         //     <div className="signup-content">
// //         //       <h2>Signup</h2>
// //         //       <form className="signup-form" onSubmit={handleSubmit}>
// //         //         {inputType === 'email' ? (
// //         //           <div>
// //         //             <label>Email Address: </label>
// //         //             <input
// //         //               type="email"
// //         //               placeholder="Enter your email address"
// //         //               value={inputValue}
// //         //               onChange={handleInputChange}
// //         //             />
// //         //           </div>
// //         //         ) : (
// //         //           <div>
// //         //             <label>Aadhar Number:</label>
// //         //             <input
// //         //               type="text"
// //         //               placeholder="Enter your Aadhar number"
// //         //               value={inputValue}
// //         //               onChange={handleInputChange}
// //         //             />
// //         //           </div>
// //         //         )}
// //         //         <label>Password: </label>
// //         //         <input type="password" placeholder="Enter Password" />
// //         //         <br />
// //         //         <button type="submit">Signup</button>
// //         //         <p>_________________________ OR _________________________</p>
// //         //         <button onClick={toggleInputType}>
// //         //           {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}
// //         //         </button>
// //         //       </form>
// //         //       <p>Already have an account !! <Link to='/login'>Login</Link></p>
// //         //     </div>
// //         //   </div>
// //         // </div>
// //     );
// // };
// //
// // export default Signup;
//
// import React, {useState, useRef} from 'react';
// import './signup.css';
// import {Link} from 'react-router-dom';
// import {google, HomeAffairs, loginsignin} from "../Dashboard/TrialJSON/images";
// import {BiHide, BiShow} from "react-icons/bi";
// import {MdOutlineUploadFile} from "react-icons/md";
//
// const Signup = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [aadhaar, setAadhaar] = useState('');
//     const [password, setPassword] = useState('');
//     const [inputType, setInputType] = useState('email');
//     const [showPassword, setShowPassword] = useState(false);
//     const [result, setResult] = useState('');
//
//     const fileInputRef = useRef(null);
//
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         // Do something with the selected file if needed
//         console.log('Selected File:', file);
//
//         // Automatically trigger upload logic here
//         // For example, you can call a function to handle the upload
//         handleUpload(file);
//     };
//
//     const handleUpload = (file) => {
//         // Add your upload logic here
//         // You can use fetch or any other method to send the file to the server
//         console.log('Uploading File:', file);
//     };
//
//     const handleInputChange = (e) => {
//         const value = e.target.value;
//         const inputName = e.target.name;
//
//         switch (inputName) {
//             case 'name':
//                 setName(value);
//                 break;
//             case 'email':
//                 setEmail(value);
//                 break;
//             case 'aadhaar':
//                 setAadhaar(value);
//                 break;
//             case 'password':
//                 setPassword(value);
//                 break;
//             default:
//                 break;
//         }
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', {name, email, aadhaar, password});
//         setName('');
//         setEmail('');
//         setAadhaar('');
//         setPassword('');
//     };
//
//     const toggleInputType = () => {
//         setInputType(inputType === 'email' ? 'aadhar' : 'email');
//     };
//
//     return (
//         <div className="flex font-sans h-screen">
//             <div className={'fixed flex flex-row right-4 top-4'}>
//                 <p className={'text-md text-dark_gray font-black'}>Already a member?&nbsp;&nbsp;</p>
//                 <p className={'text-md font-black text-purple_primary'}><Link to='/login'>Login</Link></p>
//             </div>
//             <div className="w-7/12 flex justify-center items-center max-md:w-1/2">
//                 <div className="flex flex-col items-center justify-center h-screen mr-10">
//                     <img src={HomeAffairs} alt="Home Affairs Logo" className="h-auto w-40 mb-2"/>
//                     <img src={loginsignin} alt="Login Signin Logo"
//                          className="rounded-3xl w-[500px] max-w-screen-xl h-auto"/>
//                 </div>
//             </div>
//             <div className="w-6/12 flex justify-center items-center max-md:w-1/2">
//                 <div className="flex flex-col items-center justify-center h-screen mr-10">
//                     <p className={'text-2xl font-black m-3 mb-10'}>Create a Rakshak account</p>
//                     <div className="flex items-center align-center justify-center">
//                         <button
//                             className="flex p-4 w-96 my-2 justify-center shadow-xl font-black rounded-3xl items-center">
//                             <img src={google} alt="Google Logo" className="h-5 w-5 mr-2"/>
//                             Sign up with Google
//                         </button>
//                     </div>
//                     <p className={'text-md my-2 text-dark_gray font-black'}>Or</p>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <input
//                                 className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${name ? 'font-black' : 'placeholder:font-black'}`}
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 value={name}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         {inputType === 'email' ? (
//                             <div>
//                                 <input
//                                     className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${email ? 'font-black' : 'placeholder:font-black'}`}
//                                     type="email"
//                                     name="email"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         ) : (
//                             <div className="relative">
//                                 <input
//                                     className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${aadhaar ? 'font-black' : 'placeholder:font-black'}`}
//                                     type="text"
//                                     name="aadhaar"
//                                     placeholder="Aadhaar Number"
//                                     value={result ? result[0] : ''}
//                                     onChange={handleInputChange}
//                                     readOnly={true}
//                                 />
//
//                                 <label
//                                     className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-black px-4 py-2 rounded-md cursor-pointer">
//                                     <MdOutlineUploadFile className={'w-6 h-6 text-dark_gray'}/>
//                                     <input
//                                         type="file"
//                                         className="hidden"
//                                         ref={fileInputRef}
//                                         onChange={handleFileChange}
//                                     />
//                                 </label>
//                             </div>
//                         )}
//                         <div className="relative">
//                             <input
//                                 className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${password ? 'font-black' : 'placeholder:font-black'}`}
//                                 type={showPassword ? 'text' : 'password'}
//                                 name="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={handleInputChange}
//                             />
//                             <button
//                                 type="button"  // Add this line to prevent form submission
//                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-black px-4 py-2 rounded-md cursor-pointer"
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? <BiShow className={'w-6 h-6 text-dark_gray'}/> :
//                                     <BiHide className={'w-6 h-6 text-dark_gray'}/>}
//                             </button>
//                         </div>
//
//
//                         <div className="flex items-center align-center justify-center">
//                             <button type={'submit'}
//                                     className="flex p-3.5 my-4 shadow-xl w-56 text-white bg-purple_primary justify-center font-black rounded-3xl items-center">
//                                 Get Started
//                             </button>
//                         </div>
//                         <button className={'text-purple_primary font-black'} onClick={toggleInputType}>
//                             {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Signup;
