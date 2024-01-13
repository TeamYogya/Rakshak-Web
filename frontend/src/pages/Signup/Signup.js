import React, {useState, useRef} from 'react';
import './signup.css';
import {Link, useNavigate} from 'react-router-dom';
import {google, HomeAffairs, loginsignin} from "../Dashboard/TrialJSON/images";
import {BiHide, BiShow} from "react-icons/bi";
import {MdOutlineUploadFile} from "react-icons/md";
import {useRegisterUserMutation} from "../../services/userAuthApi";
import {storeToken} from "../../services/LocalStorageService";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [aadhaar, setAadhaar] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    // const [inputType, setInputType] = useState('email');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [result, setResult] = useState('');

    const fileInputRef = useRef(null);

    const [server_error, setServerError] = useState({})
    const navigate = useNavigate();
    const [registerUser, {isLoading}] = useRegisterUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            aadhaar: data.get('aadhaar'),
            mobile: data.get('mobile'),
            password: data.get('password'),
            password2: data.get('password2'),
        }
        const res = await registerUser(actualData)
        if (res.error) {
            console.log(typeof (res.error.data.errors))
            console.log(res.error.data.errors)
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            console.log(typeof (res.data))
            console.log(res.data)
            storeToken(res.data.token)
            navigate('/login')
        }
    }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     // Do something with the selected file if needed
    //     console.log('Selected File:', file);
    //
    //     // Automatically trigger upload logic here
    //     // For example, you can call a function to handle the upload
    //     handleUpload(file);
    // };
    //
    // const handleUpload = (file) => {
    //     // Add your upload logic here
    //     // You can use fetch or any other method to send the file to the server
    //     console.log('Uploading File:', file);
    // };

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
            case 'mobile':
                setMobile(value);
                break;
            case 'aadhaar':
                setAadhaar(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'password2':
                setPassword2(value);
                break;
            default:
                break;
        }
    };

    // const toggleInputType = () => {
    //     setInputType(inputType === 'email' ? 'aadhaar' : 'email');
    // };

    return (
        <div className="flex font-sans h-screen">
            <Link to='/'><div className="mt-4 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
                </div></Link>

            <div className={'fixed flex flex-row right-4 top-4'}>
                <p className={'text-md text-dark_gray font-black'}>Already a member?&nbsp;&nbsp;</p>
                <p className={'text-md font-black text-purple_primary'}><Link to='/login'>Login</Link></p>
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
                    <p className={'text-2xl font-black m-3 mb-10'}>Create a Rakshak account</p>
                    <div className="flex items-center align-center justify-center">
                        <button
                            className="flex p-4 w-96 my-2 justify-center shadow-xl font-black rounded-3xl items-center">
                            <img src={google} alt="Google Logo" className="h-5 w-5 mr-2"/>
                            Sign up with Google
                        </button>
                    </div>
                    <p className={'text-md my-2 text-dark_gray font-black'}>Or</p>
                    <form onSubmit={handleSubmit}>
                        <div className={"flex"}>
                            <div>
                                <div>
                                    <input
                                        className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${name ? 'font-black' : 'placeholder:font-black'}`}
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/*{inputType === 'email' ? (*/}
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

                                <div>
                                    <input
                                        className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${email ? 'font-black' : 'placeholder:font-black'}`}
                                        type="text"
                                        name="aadhaar"
                                        placeholder="Aadhaar Number"
                                        value={aadhaar}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/*) : (*/}
                            {/*<div className="relative">*/}
                            {/*    <input*/}
                            {/*        className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${aadhaar ? 'font-black' : 'placeholder:font-black'}`}*/}
                            {/*        type="text"*/}
                            {/*        name="aadhaar"*/}
                            {/*        placeholder="Aadhaar Number"*/}
                            {/*        value={result ? result[0] : ''}*/}
                            {/*        onChange={handleFileChange}*/}
                            {/*        readOnly={true}*/}
                            {/*    />*/}

                            {/*    <label*/}
                            {/*        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-black px-4 py-2 rounded-md cursor-pointer">*/}
                            {/*        <MdOutlineUploadFile className={'w-6 h-6 text-dark_gray'}/>*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            className="hidden"*/}
                            {/*            ref={fileInputRef}*/}
                            {/*            onChange={handleInputChange}*/}
                            {/*        />*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*)}*/}

                            <div>
                                <div>
                                    <input
                                        className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${email ? 'font-black' : 'placeholder:font-black'}`}
                                        type="text"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={mobile}
                                        onChange={handleInputChange}
                                    />
                                </div>

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
                                        {showPassword ? <BiShow className={'w-6 h-6 text-dark_gray'}/> :
                                            <BiHide className={'w-6 h-6 text-dark_gray'}/>}
                                    </button>
                                </div>

                                <div className="relative">
                                    <input
                                        className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${password ? 'font-black' : 'placeholder:font-black'}`}
                                        type={showPassword2 ? 'text' : 'password'}
                                        name="password2"
                                        placeholder="Confirm Password"
                                        value={password2}
                                        onChange={handleInputChange}
                                    />

                                    <button
                                        type="button"  // Add this line to prevent form submission
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-primary text-black px-4 py-2 rounded-md cursor-pointer"
                                        onClick={() => setShowPassword2(!showPassword2)}
                                    >
                                        {showPassword2 ? <BiShow className={'w-6 h-6 text-dark_gray'}/> :
                                            <BiHide className={'w-6 h-6 text-dark_gray'}/>}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center align-center justify-center">
                            <button type={'submit'}
                                    className="flex p-3.5 my-4 shadow-xl w-56 text-white bg-purple_primary justify-center font-black rounded-3xl items-center">
                                Get Started
                            </button>
                        </div>
                        {/*<button className={'text-purple_primary font-black'} onClick={toggleInputType}>*/}
                        {/*    {inputType === 'email' ? 'Use Aadhar' : 'Use Email'}*/}
                        {/*</button>*/}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
