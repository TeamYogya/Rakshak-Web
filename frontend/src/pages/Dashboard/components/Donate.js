import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import axios from 'axios';
import useRazorpay from "react-razorpay";
import { Autoplay } from 'swiper/modules';
//import { useCreateDonateCardMutation } from '../../../services/donateAuthApi.js';

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState("2000");
  const navigate = useNavigate();
  const Razorpay = useRazorpay();
console.log('Razorpay object:', Razorpay);


//  const [firstName, setFirstName] = useState('');
//  const [lastName, setLastName] = useState('');
//  const [email, setEmail] = useState('');
//  const [addDonation, { isLoading }] = useCreateDonateCardMutation();

  const updateAmount = (amount) => {
    setDonationAmount(amount);
  };

  const increaseAmount = () => {
    setDonationAmount(donationAmount + 500);
  };

  const decreaseAmount = () => {
    if (donationAmount > 2000) {
      setDonationAmount(donationAmount - 500);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

const complete_order = (payment_id, order_id, signature)=>{
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/donate/complete/',
            data: {
                "payment_id": payment_id,
                "order_id": order_id,
                "signature": signature,
                "amount": donationAmount
            }
        })
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error.response.data);
        })
    }

const handleDonation = async (e) => {
  e.preventDefault();

  console.log("Start handleDonation");
  const requestData = {
    amount: donationAmount,
    currency: "INR",
  };
  console.log("Request Data:", requestData);

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/donate/create/', requestData);
    console.log("Response:", response);

    const order_id = response.data.data.id;
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      name: "Rakshak",
      description: "Test Transaction",
      order_id: order_id,
      handler: function (response) {
        console.log("Payment successful:", response);
//        alert(response.razorpay_payment_id);
//        alert(response.razorpay_order_id);
//        alert(response.razorpay_signature);
         complete_order(
                        response.razorpay_payment_id,
                        response.razorpay_order_id,
                        response.razorpay_signature
                    )
      },
      prefill: {
        name: "priyanshi",
        email: "latakotian09@example.com",
        contact: "9321459886",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
const rzp1 = new window.Razorpay(options);
rzp1.open();

    if (Razorpay) {
      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        console.error("Payment failed:", response);
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

    } else {
      console.error("Razorpay object not available");
    }

  } catch (error) {
    console.error("Error:", error);
  }

  console.log("End handleDonation");
};
useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    return (
        <div className="font-sans">
            <div className="w-full h-screen bg-black flex justify-center items-center">
                <div className="grid grid-cols-2 w-[1000px] h-[600px] bg-white rounded-3xl drop-shadow-2xl">
                    <div className="w-full h-full rounded-l-3xl">
                        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper w-full h-full bg-dark_gray rounded-l-3xl"
              >
                <SwiperSlide className="overflow-hidden bg-cover bg-no-repeat text-2xl h-full bg-[url('https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRlfGVufDB8fDB8fHww')]">
                </SwiperSlide>
                <SwiperSlide className="bg-cover bg-no-repeat text-2xl h-full bg-[url('https://media.istockphoto.com/id/465426619/photo/close-up-view-of-hand-writing-a-donation-check.jpg?s=612x612&w=0&k=20&c=hPzXgCbwshGfIdW-sD-DX3sQNKHgv4fBrRXEPgtpk_Q=')]">
                </SwiperSlide>
                <SwiperSlide className="bg-cover bg-no-repeat text-2xl h-full bg-[url('https://media.istockphoto.com/id/813128966/photo/hand-putting-coins-in-glass-jar-for-giving-and-donation-concept.jpg?s=612x612&w=0&k=20&c=n6JuwHg5qL5usrI45PCsvjXjX743Mk0Ov4pW2GtO8CA=')]">
                </SwiperSlide>
            </Swiper>
                    </div>
                    <form action="" className="w-full h-full flex flex-col">
                        <h className="text-3xl font-bold mt-16">Donate</h>
                        <p className="text-xs text-dark_gray">Donate as generously as you can today, to help us meet our goal!</p>
                        <h className="flex text-sm font-bold mt-4 ml-14">Amount</h>
                        <div className="w-full h-16 mt-2 grid grid-cols-7">
                            <div className="w-full h-full flex justify-end items-center col-span-2 pr-1"><button onClick={() => updateAmount(2000)} className="shadow-lg shadow-green-100/50 bg-green-100 text-green-500 w-20 h-10 rounded-3xl border-2 border-solid border-green-500">₹2000</button></div>
                            <div className="w-full h-full flex justify-center items-center px-1"><button onClick={() => updateAmount(4000)} className="shadow-lg shadow-green-100/50 bg-green-100 text-green-500 w-20 h-10 rounded-3xl border-2 border-solid border-green-500">₹4000</button></div>
                            <div className="w-full h-full flex justify-center items-center px-1"><button onClick={() => updateAmount(6000)} className="shadow-lg shadow-green-100/50 bg-green-100 text-green-500 w-20 h-10 rounded-3xl border-2 border-solid border-green-500">₹6000</button></div>
                            <div className="w-full h-full flex justify-center items-center px-1"><button onClick={() => updateAmount(8000)} className="shadow-lg shadow-green-100/50 bg-green-100 text-green-500 w-20 h-10 rounded-3xl border-2 border-solid border-green-500">₹8000</button></div>
                            <div className="w-full h-full flex items-center col-span-2 pl-1"><button onClick={() => updateAmount(10000)} className="shadow-lg shadow-green-100/50 bg-green-100 text-green-500 w-20 h-10 rounded-3xl border-2 border-solid border-green-500">₹10000</button></div>
                        </div>
                        <div className="w-full h-16 grid grid-cols-7">
                            <div className="text-green-700 col-span-2 w-full h-full items-center"><h className="flex text-sm font-bold mt-4 ml-14">Other:</h></div>
                            <div className="col-span-5 w-full h-full flex items-center">
                                <button className="bg-light-gray rounded-l-lg w-10 h-10 border-2 border-gray border-solid text-green-700 text-3xl" onClick={decreaseAmount}>-</button>
                                <button className="w-20 h-10 border-y-2 border-gray border-solid">₹{donationAmount}</button>
                                <button className="bg-light-gray rounded-r-lg w-10 h-10 border-2 border-gray border-solid text-green-700 text-3xl" onClick={increaseAmount}>+</button>
                            </div>
                        </div>
                        <h className="flex text-sm font-bold mt-4 ml-14">First Name</h>
                        <input className="flex text-sm font-bold mt-4 ml-14 border-2 border-gray border-solid mr-16 py-1 pl-2 rounded-md" type="text"

  required />
                        <h className="flex text-sm font-bold mt-2 ml-14">Last Name</h>
                        <input className="flex text-sm font-bold mt-2 ml-14 border-2 border-gray border-solid mr-16 py-1 pl-2 rounded-md" type="text"
                   required/>
                        <h className="flex text-sm font-bold mt-2 ml-14">Email</h>
                        <input className="flex text-sm font-bold mt-2 ml-14 border-2 border-gray border-solid mr-16 py-1 pl-2 rounded-md" type="email"
                           required/>
                        <div className="flex-grow flex items-end">
                            <div className="w-full h-14 bg-light-gray rounded-br-3xl grid grid-cols-2">
                                <div className="flex text-green-700 justify-center w-full h-full items-center"><button onClick={handleCancel} className="flex text-sm font-bold mr-14">Cancel</button></div>
                                <div className="flex text-green-700 justify-end w-full h-full items-center"><button type="submit" onClick={(e) => handleDonation(e)} className="flex text-sm font-bold mr-14">Continue</button></div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
        </div>
    );
}
