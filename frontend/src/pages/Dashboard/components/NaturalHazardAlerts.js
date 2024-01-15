import React, {useState} from 'react';
import {useLoginUserMutation, useSendSMSMessageToUsersMutation} from "../../../services/userAuthApi";
import {Link, useNavigate} from 'react-router-dom';
import {BiHide, BiShow} from "react-icons/bi";
import {storeToken} from "../../../services/LocalStorageService";
import { useDispatch, useSelector } from 'react-redux';

const NaturalHazardAlerts = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    // const { status, error } = useSelector((state) => state.message);
    const [loginUser, {isLoading}] = useLoginUserMutation()
    const [sendSMSMessageToUsers] = useSendSMSMessageToUsersMutation();
    const handleMsgSubmit = async (e) => {
        e.preventDefault();
        const res = await sendSMSMessageToUsers({ message });
        if (res.error) {
            console.log(typeof (res.error.data.errors))
            console.log(res.error.data.errors)
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            console.log(typeof (res.data))
            console.log(res.data)
            storeToken(res.data.token)
            navigate("/")
        }
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [notCorrect, setNotCorrect] = useState(true);
    const [server_error, setServerError] = useState({})
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;

        switch (inputName) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        const res = await loginUser(actualData)
        if (res.error) {
            console.log(typeof (res.error.data.errors))
            console.log(res.error.data.errors)
            setServerError(res.error.data.errors)
            setNotCorrect(true)
        }
        if (res.data) {
            console.log(typeof (res.data))
            console.log(res.data)
            storeToken(res.data.token)
            setNotCorrect(false)
        }
    }

    return (
        <div  className="font-sans">
            {notCorrect?(
                <div>
                <form className="flex w-full h-screen items-center justify-center" onSubmit={handleSubmit}>
                <div className="w-full items-center justify-center flex">
                <div className="w-96">
                <h className="font-bold text-xl pb-20">Notification Manager</h>
                    <input
                className={`p-3.5 my-2 shadow-xl w-96 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-3xl ${email ? 'font-black' : 'placeholder:font-black'}`}
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
            />
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
                    className="absolute bg-purple-primary text-black rounded-md cursor-pointer top-5 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <BiShow className={'w-6 h-6 text-dark_gray'}/> :
                        <BiHide className={'w-6 h-6 text-dark_gray'}/>}
                </button>
                    </div>

                    <div className="flex items-center align-center justify-center">
                            <button type={'submit'}
                                    className="flex p-3.5 my-4 shadow-xl w-56 text-white bg-purple_primary justify-center font-black rounded-3xl items-center">
                                Get Started
                            </button>
                        </div>
            </div>
            </div>
            </form>
                    </div>
            ):(
            <form className="w-full h-screen flex items-center justify-center" onSubmit={handleMsgSubmit}>
                <div className="w-full h-full grid grid-rows-3">
                    <div className="row-span-2 w-full h-full flex items-center justify-center">
                        <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none w-[1000px] px-4 py-4 border rounded-3xl focus:outline-0 focus:border-purple-800 text-black h-[350px]"
                placeholder="Send Emergency Alert"
                    required
                />
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <button className="px-5 py-5 bg-purple_primary rounded-full text-white w-52" type="submit">Send Alert</button>
                    </div>
                </div>
            </form>
            )}
        </div>
    );
};

export default NaturalHazardAlerts;