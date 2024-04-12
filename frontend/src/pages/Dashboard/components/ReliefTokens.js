import React from 'react';
import {Link} from 'react-router-dom'
import heart from '../../../assets/img/heart.png'
import donatecartoon from '../../../assets/img/donatecartoon.png'
export default function ReliefTokens() {
    return (
        <div className="font-sans">
            <div className="bg-cover bg-no-repeat items-center bg-[url('https://i.pinimg.com/originals/9e/ec/3c/9eec3cd5c2a2064be3005409dca25f01.jpg')] w-full h-[640px] flex">
                <div className="absolute z-[2] w-[400px] h-[400px] bg-purple-900 rounded-3xl ml-20 grid grid-rows-3 shadow-xl shadow-dark_gray">
                    <div className="w-full h-full flex justify-center pt-10">
                        <h className="text-white text-3xl text-left">Your donation<br/>can help us<br/>save lives</h>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <Link to="/donate"><button className="hover:bg-white shadow-lg shadow-white hover:text-black duration-1000 w-52 h-14 rounded-xl text-white border-white border-4 border-solid">Donate Now</button></Link>

                    </div>
                    <div className="w-full h-full grid grid-cols-4">
                        <div className="w-full h-full flex justify-end pr-1">
                            <img src={heart} alt="" className="w-5 h-5"/>
                        </div>
                        <div className="w-full h-full col-span-3 flex justify-center"><h className="text-white text-sm text-left">We take 0% comission on donations<br/>and only keep running on optional donations</h></div>
                    </div>
                </div>
                <div className="w-[1050px] max-h-screen absolute flex justify-end z-[1] items-center scale-125">
                <img src={donatecartoon} alt=""/>
            </div>
            </div>
        </div>
    );
};