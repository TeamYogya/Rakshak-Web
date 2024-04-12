import React, {useState} from 'react';
import {useAlertUserMutation, useSendSMSMessageToUsersMutation} from "../../../services/userAuthApi";
import {Link, useNavigate} from 'react-router-dom';
import {BiHide, BiShow} from "react-icons/bi";
import {storeToken} from "../../../services/LocalStorageService";
import { useDispatch, useSelector } from 'react-redux';

const NaturalHazardAlerts = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    // const { status, error } = useSelector((state) => state.message);
    const [alertUser, {isLoading}] = useAlertUserMutation()
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
        const res = await alertUser(actualData)
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
                <div className="w-full h-screen flex items-center justify-center">
                    <form className="w-96 h-[500px] rounded-3xl grid grid-rows-5 overflow-hidden centerlayer backdrop-blur-md bg-blur-md bg-opacity-30 border-solid border-purple-300 border-2" onSubmit={handleSubmit}>
                        <div className="w-full h-full flex items-end justify-center"><h className="font-bold text-xl">Notification Manager</h></div>
                        <div className="w-full h-full grid grid-rows-2 row-span-3">
                            <div className="w-full h-full flex items-end justify-center px-4">
                                            <input
                                                className="peer-invalid:text-red-500 py-2 pl-4 w-full h-12 rounded-3xl border-solid border-b-2 border-purple-500 focus:outline-none bg-transparent"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                            <div className="w-full h-full flex items-center justify-center px-4">
                                            <input
                                                className="py-2 pl-4 w-full h-12 rounded-3xl border-solid border-b-2 border-purple-500 focus:outline-none bg-transparent"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                        </div>
                        <div className="w-full h-full bg-transparent rounded-b-3xl flex justify-end">
                                    <button type="submit" className="hover:shadow-xl hover:shadow-purple-300/50 hover:bg-purple-300 duration-1000 w-24 flex items-center justify-center h-18 rounded-br-3xl">Enter<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
</button>
                                </div>
                    </form>
                    </div>
            ):(
                <div className="w-full h-screen flex items-start justify-center">
                    <form onSubmit={handleMsgSubmit} className="grid grid-rows-6 w-[1000px] h-[500px] rounded-3xl bg-gradient-to-br border-solid border-l-2 border-t-2 border-purple-500 from-purple-300 to-transparent">
            <div className="w-full h-full row-span-5 px-4 py-4">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none w-full px-4 py-4 border rounded-3xl focus:outline-0 focus:border-purple-800 text-black h-full"
                placeholder="Send Emergency Alert"
                    required/>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <button type="submit" className="w-56 h-12 rounded-full bg-blue-400 text-white">Send Alert</button>
            </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default NaturalHazardAlerts;