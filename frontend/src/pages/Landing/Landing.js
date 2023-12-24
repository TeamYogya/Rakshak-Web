import React, { useState, useEffect } from 'react';
import sih from "./Video/sih.webm"
import rakshak from "./Images/rakshak.png"
import ashoka from "./Images/ashoka.png"
import geofencing from "./Images/geofencing.jpg"
import mock from "./Images/mock.jpg"
import phone1 from "./Images/phone1.jpg"
import phone2 from "./Images/phone2.jpg"
import aware from "./Images/aware.jpg"
import alert from "./Images/alert.png"
import navi from "./Images/navi.jpg"
import flood from "./Images/flood.jpg"
import cyclone from "./Images/cyclone.jpg"
import tsunami from "./Images/tsunami.jpeg"
import wildfire from "./Images/wildfire.jpg"
import earthquake from "./Images/earthquake.jpg"
import {Link} from "react-router-dom";


export default function Landing() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
    setModal(!modal);
  };
    const [toggle, setToggle] = useState(false);

  const getButtonClass = () => {
    if (toggle) {
        // bg-[#4A3ABA] bg-[#4A3AFF]
      return 'bg-[#4A3ABA]';
    } else {
      return 'bg-gray-200';
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  //I can stop scrolling when settings is toggled
    // if (modal) {
    //   document.documentElement.style.overflowY = 'hidden';
    //   document.body.style.overflowY = 'hidden';
    // } else {
    //   document.documentElement.style.overflowY = 'auto';
    //   document.body.style.overflowY = 'auto';
    // }
  const navigation = [
    { name: 'Home', id: 'home' }, // Remove href and add id
    { name: 'Why us', href: '#about' },
    { name: 'Programs', id: 'cards' }, // Remove href and add id
    { name: 'Donate', href: '#donate' },
    { name: 'Settings', onClick: toggleModal }, // Keep this for your modal
    { name: 'Contact us', href: '#footer' }
];

    useEffect(() => {
        // Select the navigation bar
        const navbar = document.getElementById('navbar');

        // Get the initial offset of the navigation bar

        // Function to update the navigation bar's position
        function updateNavbarPosition() {
            if (window.scrollY >= 10) {
                navbar.style.position = 'fixed';
                navbar.style.top = '0';
                navbar.style.left = '0';
                navbar.style.width = '100%';
                navbar.style.background = 'rgba(255, 255, 255, 0.2)'; // Adjust the alpha (0.2) for the desired level of frosted glass effect
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.position = 'relative';
                navbar.style.background = 'transparent'; // Change to your initial background color
            }
        }


        // Listen for scroll events and update the navigation bar position
        window.addEventListener('scroll', updateNavbarPosition);

        // Call the function initially in case the page loads already scrolled
        updateNavbarPosition();
        }, []);
    // Function to scroll to a section when a button is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    useEffect(() => {
        const element1 = document.getElementById("phone1Id");
        element1.style.backgroundImage = `url('${phone1}')`;
        const element2 = document.getElementById("phone2Id");
        element2.style.backgroundImage = `url('${phone2}')`;
        }, []);
    return (
        <div className="font-sans">
            {modal && (
        <div className="w-full h-full top-0 bottom-0 right-0 left-0 fixed z-50">
          <div onClick={toggleModal} className="bg-white bg-opacity-20 backdrop-blur-xl w-full h-full top-0 bottom-0 right-0 left-0 fixed"></div>
          <div className="overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-height-[1.4] bg-[#f1f1f1] p-[14px 28px] rounded-3xl max-w-[600px] min-w-[300px]">
            <h2 className="text-[#170F49] text-3xl font-dm-sans font-bold break-words py-4">Settings</h2>
              <form>
                  <div className="grid grid-rows-6 h-[500px] w-[500px]">
                    <div className="w-full bg-red-950 h-20"></div>
                      <div className="w-full bg-red-950 h-20"></div>
                      <div className="w-full bg-red-950 h-20"></div>
                      <div className="w-full bg-red-950 h-20"></div>
                      <div className="grid grid-cols-12 w-full h-20">
                          <div className="col-span-10 w-full h-full bg-green-950"></div>
                          <div className="flex justify-center items-center col-span-2 w-full h-full">
                              <button
      className={
        'transition ease-in-out duration-300 w-12 rounded-full focus:outline-none ' +
        getButtonClass()
      }
      onClick={handleButtonClick}
    >
      <div
        className={
          'transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow ' +
          (toggle ? 'transform translate-x-full' : '')
        }
      ></div>
    </button>
                          </div>
                      </div>
                      <div className="justify-center flex items-center w-full h-20">
                          <input type="submit" className="hover:bg-[#4A3ABA] bg-[#4A3AFF] rounded-3xl text-center text-white text-16 font-dm-sans font-medium break-words py-4 px-10" value="Save"/>
                      </div>
                  </div>
              </form>

              <svg onClick={toggleModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-bl-full pl-4 pt-2 pb-4 absolute top-0 right-0 feather feather-x w-16 h-16 stroke-gray cursor-pointer max-md:hidden"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
        </div>
      )}
            <header id="home" className="absolute inset-x-0 z-[2] top-0">
                <nav id="navbar" className="z-[10] flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1 items-center">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center">
                            <img
                                className="h-24 w-auto"
                                src={rakshak}
                                alt="Rakshak"
                            />
                            {/*<span className="text-bold ml-2 text-2xl italic max-md:text-xl">Rakshak</span>*/}
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/*<Bars3Icon className="h-6 w-6" aria-hidden="true" />*/}
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
    {navigation.map((item) => (
    <button
        key={item.name}
        onClick={() => {
            if (item.id) {
                scrollToSection(item.id);
            } else if (item.onClick) {
                item.onClick();
            }
        }}
        className="text-sm font-bold leading-6 text-gray-900"
    >
        {item.name}
    </button>
))}

</div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to={"/login"}
                            className="font-bold bg-transparent hover:bg-black hover:text-white max-md:[32px] text-lg rounded-full border-2 border-black inline-flex px-[34px] py-[12px] content-center items-center gap-[10px]">Login
                        </Link>
                    </div>
                </nav>
                <div
                    className={"top-[143px] w-full pl-20 absolute text-black text-[64px] font-bold break-words text-left max-md:text-left max-md:text-[32px] max-md:pl-10"}>
                    Knowledge is Your<br/>
                    Best Defense, Explore<br/>
                    Disaster Preparedness<br/>
                    Today.<br/>
                    <Link to={"/signup"}
                        className="top-[390px] font-bold rounded-full border-5 px-14 py-6 bg-black inline-flex content-center items-center gap-3 absolute text-white text-2xl font-semibold max-md:text-lg max-md:px-12 max-md:py-4 max-md:top-52">Register
                    </Link>
                </div>
                <div className="flex justify-center w-full max-md:scale-50">
                <div className="w-[1063px] h-[250px] top-[615px] absolute max-md:top-[750px]">
      <div className="bg-white bg-opacity-20 backdrop-blur-xl w-[1063px] h-[250px] absolute bg-[#afafaf]-700 bg-opacity-35 rounded-[71px] border-[5px] border-[#676767]" ></div>
      <div className="absolute left-[265px] top-[25px] text-white text-[64px] whitespace-normal">Government of India</div>
      <div className="absolute left-[206px] top-[125px] text-black text-[64px] whitespace-normal">Ministry of Home Affairs</div>
      <img src={ashoka} className="w-[139px] h-[187px] left-[39px] top-[32px] absolute"></img>
    </div>
                    </div>
            </header>
            <div
                className="absolute inset-0 z-[1] h-full bg-gradient-to-b from-opacity-50 via-opacity-50 from-[#C1BDBD]/50 to-[#C1BDBD]/50 backdrop-blur-[15px]">
            </div>
            <div className="absolute inset-0 h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={sih} type="video/webm"/>
                </video>
                <div className="h-40 w-full bg-gradient-to-b from-[#606060] to-white"></div>

                <div className="w-full h-[1200px] flex justify-center item-center max-md:scale-50 max-md:w-0">
        <div className="w-[1187px] h-[1200px] flex max-md:scale-90">
            <h className="flex top: 0px; text-black text-8xl font-thin break-words absolute text-left mt-[100px] ml-[40px]">Natural<br/>Disasters</h>
            <h className="ml-[694px] mt-[925px] flex absolute text-right text-black text-4xl font-thin break-words">A natural disaster<br/>is the highly harmful <br/>impact on a society<br/>or community following<br/>a natural hazard event</h>
            <div className="mt-[100px] ml-[50px]">
            <div className="w-[525px] h-[400px] pl-[540px] top: 0px; absolute">
                <img className="w-[525px] h-[400px] left: 0px; top: 0px; absolute" src={flood} />
            </div>
            <div className="w-[525px] h-[400px] pl-[538px] pt-[415px] absolute">
                <img className="w-[525px] h-[400px] left: 0px; top: 0px; absolute" src={cyclone} />
            </div>
            <div className="w-[525px] h-[400px] left: 0px; pt-[615px] absolute">
                <img className="w-[525px] h-[400px] left: 0px; top: 0px; absolute" src={earthquake} />
            </div>
            <div className="w-[525px] h-[400px] left: 0px; pt-[200px] absolute">
                <img className="w-[525px] h-[400px] left: 0px; top: 0px; absolute" src={tsunami} />
            </div>
            <div className="w-[345px] h-[400px] pl-[360px] pt-[319px] absolute">
                <img className="w-[345px] h-[400px] left: 0px; top: 0px; absolute border-[20px] border-white border-solid" src={wildfire}/>
            </div>
            </div>
        </div>
    </div>
                <div id="cards" className="pt-40 pb-10 text-black text-5xl font-normal break-word"><h>Your Path to Resilience Explore What Our Site Offers</h></div>
                <div className="justify-center w-full grid grid-rows-12 gap-4 max-md:scale-50">
                        <div className="hover:scale-105 duration-1000 grid grid-cols-2 w-[1063px] h-[394px] bg-[#1A222C] rounded-3xl hover:scale-105 duration-1000 hover:bg-gradient-to-br from-[#07C557] via-[#1A222C] to-transparent">
                            <div className="h-full w-full flex items-center justify-center">
                                <img className="w-[469px] h-[274px] rounded-[88px]" src={mock} />
                            </div>
                            <div className="grid grid-rows-2 h-full w-full justify-center">
                                <div className="pt-10 text-white text-3xl font-bold break-word">Mock Exercises and Programs</div>
                                <div className="text-center justify-center text-[#C9C9C9] text-3xl font-normal break-word">Practice makes perfect,<br/>especially when it<br/>comes to disaster readiness.</div>
                            </div>
                        </div>
                        <div className="grid grid-col-2 gap-4 grid-flow-col">
    <div className="grid grid-row-2 gap-4">
                    <div className="grid grid-rows-4 w-[525px] h-[764px] rounded-3xl bg-[#1A222C] hover:scale-105 duration-1000 hover:bg-gradient-to-tr from-[#FEA800] via-[#1A222C] to-transparent">
                        <div className="row-end-2">
                            <div className="pt-10 text-center text-white text-3xl font-bold break-word"><h>Feasibility Prediction</h></div>
                            <div className="pt-10 text-center text-[#C9C9C9] text-3xl font-normal break-word"><h>Stay ahead of disaster risks<br/>with our feasibility prediction tool</h></div>
                        </div>
                        <div className="row-start-2 row-end-5">
                                <div id="phone1Id" className="mt-[162px] bg-[-238.722px_-28px] w-[287px] h-[402px] absolute rounded-[40px] overflow-hidden bg-no-repeat bg-[length:766.989px_430.434px]"></div>
                                <div id="phone2Id" className="ml-[255px] mt-[20px] bg-[-97.006px_-54.658px] w-[270px] h-[548px] absolute rounded-[40px] overflow-hidden bg-no-repeat bg-[length:464.0112px_651.298px]"></div>
                        </div>
      </div>
        <div className="grid grid-rows-2 w-[525px] h-[523px] bg-[#1A222C] rounded-3xl hover:scale-105 duration-1000 hover:bg-gradient-to-br from-[#7000FE] via-[#1A222C] to-transparent">
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <img
                        className="h-full w-full rounded-3xl"
                        src={navi}
                    />
                </div>
                <div className="pt-20 justify-center">
                    <h className="w-[457px] h-[30.12px] text-white text-3xl font-bold break-word">User<br/>Assistance<br/>and<br/>Navigation</h>
                </div>
            </div>
            <div className="pt-10 justify-center">
                <h className="w-[464px] h-[82px] text-center text-[#C9C9C9] text-5xl font-normal break-word">In the chaos of a disaster, finding the right information quickly is crucial</h>
            </div>
        </div>
    </div>
    <div className="grid grid-row-2 gap-4">
        <div className="grid grid-rows-2 w-[525px] h-[523px] bg-[#1A222C] rounded-3xl hover:scale-105 duration-1000 hover:bg-gradient-to-bl from-[#FEA800] via-[#1A222C] to-transparent">
            <div className="grid grid-cols-2">
                <div className="pt-20 justify-center">
                    <h className="w-[457px] h-[30.12px] text-white text-3xl font-bold break-word">Alerts<br/>and<br/>Notifications</h>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        className="h-full w-full"
                        src={alert}
                    />
                </div>
            </div>
            <div className="items-center justify-center">
                <h className="w-[464px] h-[82px] text-center text-[#C9C9C9] text-5xl font-normal break-word">Timely information can make all the difference during an emergency.</h>
            </div>
        </div>
        <div className="grid grid-rows-2 w-[525px] h-[764px] bg-[#1A222C] rounded-3xl hover:scale-105 duration-1000 hover:bg-gradient-to-tl from-[#7000FE] via-[#1A222C] to-transparent">
            <div className="flex items-center justify-center">
                <img className="w-full h-full rounded-3xl" src={aware} />
            </div>
            <div className="grid grid-row-2justify-center">
                <h className="pt-20 text-white text-3xl font-bold break-word">Education and Awareness</h>
                <h className="text-center text-[#C9C9C9] text-3xl font-normal break-word">Knowledge is power especially<br/>in disaster management</h>
            </div>
        </div>
    </div>

</div>
                    <div className="grid grid-cols-2 w-[1063px] h-[394px] bg-[#1A222C] rounded-3xl hover:scale-105 duration-1000 hover:bg-gradient-to-bl from-[#07C557] via-[#1A222C] to-transparent">
                        <div className="grid grid-rows-2 h-full w-full justify-center">
                            <div className="pt-10 text-white text-3xl font-bold break-word">Geofencing</div>
                            <div className="text-center justify-center text-[#C9C9C9] text-3xl font-normal break-word">Our geofencing feature<br/>uses cutting-edge technology<br/>to create virtual boundaries<br/>around specific geographical<br/>areas.</div>
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                            <img className="w-[469px] h-[274px] rounded-[88px]" src={geofencing} />
                        </div>
                    </div>

    </div>
                <footer id="footer" className="w-full bottom-0 mt-20 max-md:scale-50">
                    <div className="w-full h-0 transform rotate-180 origin-top border border-solid border-[#EFF0F6]"></div>
                    <div className="grid grid-cols-2">
                        <div className="w-full py-20 flex text-[#170F49] text-3xl font-dm-sans font-bold break-words pl-20"><h>Rakshak</h></div>
                        <div className="w-full py-20 text-[#6F6C90] text-2xl font-dm-sans font-normal break-words text-left"><h>Government of India, Ministry of Home Affairs</h></div>
                    </div>
                    <div className="w-full h-0 transform rotate-180 origin-top border border-solid border-[#EFF0F6]"></div>
                    <div className="grid grid-cols-6 h-96">
                        <div className="w-full py-20 text-[#6F6C90] text-sm font-dm-sans font-bold break-words">
                            <ul className="list-none list-outside">
                                <li className="text-[#170F49] text-xl pb-5">Products</li>
                                <li className="pb-2">Features</li>
                                <li className="pb-2">Price</li>
                                <li className="pb-2">Case Studies</li>
                                <li className="pb-2">Reviews</li>
                                <li className="pb-2">Updates</li>
                            </ul>
                        </div>
                        <div className="w-full py-20 text-[#6F6C90] text-sm font-dm-sans font-bold break-words">
                            <ul className="list-none list-outside">
                                <li className="text-[#170F49] text-xl pb-5">Companys</li>
                                <li className="pb-2">About</li>
                                <li className="pb-2">Contact Us</li>
                                <li className="pb-2">Careers</li>
                                <li className="pb-2">Culture</li>
                                <li className="pb-2">Blog</li>
                            </ul>
                        </div>
                        <div className="w-full py-20 text-[#6F6C90] text-sm font-dm-sans font-bold break-words">
                            <ul className="list-none list-outside">
                                <li className="text-[#170F49] text-xl pb-5">Support</li>
                                <li className="pb-2">Help Center</li>
                                <li className="pb-2">Getting Started</li>
                                <li className="pb-2">Server Status</li>
                                <li className="pb-2">Report a Bug</li>
                                <li className="pb-2">Chat Support</li>
                            </ul>
                        </div>
                        <div className="w-full py-20 text-[#6F6C90] text-sm font-dm-sans font-bold break-words">
                            <ul className="list-none list-outside">
                                <li className="text-[#170F49] text-xl pb-5">Downloads</li>
                                <li className="pb-2">iOS</li>
                                <li className="pb-2">Android</li>
                                <li className="pb-2">Mac</li>
                                <li className="pb-2">Windows</li>
                                <li className="pb-2">Chrome</li>
                            </ul>
                        </div>
                        <div className="col-span-2 flex w-full py-20 text-[#6F6C90] text-sm font-dm-sans font-bold break-words">
                            <ul className="list-none list-outside">
                                <li className="text-[#170F49] text-xl pb-5">Subscribe to your Newsletter</li>
                                <li className="pb-2">We will send updates to you.</li>
                                <li className="pb-2">Kindly provide us your detail</li>
                                <li className="pb-2"><form action="submit">
                                    <input className="pl-5 w-[359px] h-[68px] bg-white shadow-[0px 2px 12px rgba(20.11, 19.66, 42.50, 0.08)] rounded-[108px] border border-solid border-[#D9DBE9]" placeholder="Enter Your Email" type="email"/>
                                    <br/>
                                    <input className="mt-5 bg-[#4A3AFF] rounded-[76px] justify-center items-center gap-4 text-center text-white text-16 font-dm-sans font-medium break-words py-[18px] px-[24px] flex" value="Subscribe" type="submit"/>
                                </form></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-0 transform rotate-180 origin-top border border-solid border-[#EFF0F6]"></div>
                    <div className="grid grid-cols-2">
                        <div className="w-full pt-10 pl-20 text-[#6F6C90] text-sm font-dm-sans font-normal break-words text-left"><h>Hope you are safe and enjoying our services</h></div>
                        <div className="w-full pt-10 flex text-[#170F49] text-3xl font-dm-sans font-bold break-words pl-20"><h>Rakshak</h></div>
                    </div>
                </footer>
            </div>
        </div>
    )
}