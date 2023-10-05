import { useState, useEffect } from 'react';
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

const navigation = [
    {name: 'Home', href: '#'},
    {name: 'Why us', href: '#'},
    {name: 'Programs', href: '#'},
    {name: 'Donate', href: '#'},
    {name: 'Safety Tips', href: '#'},
    {name: 'Contact us', href: '#'},
]
export default function Landing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    useEffect(() => {
        const element1 = document.getElementById("phone1Id");
        element1.style.backgroundImage = `url('${phone1}')`;
        const element2 = document.getElementById("phone2Id");
        element2.style.backgroundImage = `url('${phone2}')`;
        }, []);
    return (
        <div className={"font-sans"}>
            <header className="absolute inset-x-0 z-[2] top-0">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
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
                            <a key={item.name} href={item.href} className="text-sm font-bold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button
                            className="font-bold bg-transparent hover:bg-black hover:text-white max-md:[32px] text-lg rounded-full border-2 border-black inline-flex px-[34px] py-[12px] content-center items-center gap-[10px]">Login
                        </button>
                    </div>
                </nav>
                <div
                    className={"top-[143px] w-full pl-20 absolute text-black text-[64px] font-bold break-words text-left max-md:text-left max-md:text-[32px] max-md:pl-10"}>
                    Knowledge is Your<br/>
                    Best Defense, Explore<br/>
                    Disaster Preparedness<br/>
                    Today.<br/>
                    <button
                        className="top-[400px] font-bold rounded-full border-5 px-14 py-6 bg-black inline-flex content-center items-center gap-3 absolute text-white text-2xl font-semibold max-md:text-lg max-md:px-12 max-md:py-4 max-md:top-52">Register
                    </button>
                </div>
                <div className="flex justify-center w-screen max-md:scale-50">
                <div className="w-[1063px] h-[250px] top-[615px] absolute max-md:top-[750px]">
      <div className="w-[1063px] h-[250px] absolute bg-[#afafaf]-700 bg-opacity-35 rounded-[71px] border-[5px] border-[#676767]" ></div>
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
                <div className="pt-40 pb-10 text-black text-5xl font-normal break-word"><h>Your Path to Resilience Explore What Our Site Offers</h></div>
                <div className="justify-center w-full grid grid-rows-12 gap-4 max-md:scale-50">
                        <div className="grid grid-cols-2 w-[1063px] h-[394px] bg-[#1A222C] rounded-3xl hover:bg-gradient-to-br from-[#07C557] via-[#1A222C] to-transparent">
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
                    <div className="grid grid-rows-4 w-[525px] h-[764px] rounded-3xl bg-[#1A222C] hover:bg-gradient-to-tr from-[#FEA800] via-[#1A222C] to-transparent">
                        <div className="row-end-2">
                            <div className="pt-10 text-center text-white text-3xl font-bold break-word"><h>Feasibility Prediction</h></div>
                            <div className="pt-10 text-center text-[#C9C9C9] text-3xl font-normal break-word"><h>Stay ahead of disaster risks<br/>with our feasibility prediction tool</h></div>
                        </div>
                        <div className="row-start-2 row-end-5">
                                <div id="phone1Id" className="mt-[162px] bg-[-238.722px_-28px] w-[287px] h-[402px] absolute rounded-[40px] overflow-hidden bg-no-repeat bg-[length:766.989px_430.434px]"></div>
                                <div id="phone2Id" className="ml-[255px] mt-[20px] bg-[-97.006px_-54.658px] w-[270px] h-[548px] absolute rounded-[40px] overflow-hidden bg-no-repeat bg-[length:464.0112px_651.298px]"></div>
                        </div>
      </div>
        <div className="grid grid-rows-2 w-[525px] h-[523px] bg-[#1A222C] rounded-3xl hover:bg-gradient-to-br from-[#7000FE] via-[#1A222C] to-transparent">
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
        <div className="grid grid-rows-2 w-[525px] h-[523px] bg-[#1A222C] rounded-3xl hover:bg-gradient-to-bl from-[#FEA800] via-[#1A222C] to-transparent">
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
        <div className="grid grid-rows-2 w-[525px] h-[764px] bg-[#1A222C] rounded-3xl hover:bg-gradient-to-tl from-[#7000FE] via-[#1A222C] to-transparent">
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
                    <div className="grid grid-cols-2 w-[1063px] h-[394px] bg-[#1A222C] rounded-3xl hover:bg-gradient-to-bl from-[#07C557] via-[#1A222C] to-transparent">
                        <div className="grid grid-rows-2 h-full w-full justify-center">
                            <div className="pt-10 text-white text-3xl font-bold break-word">Geofencing</div>
                            <div className="text-center justify-center text-[#C9C9C9] text-3xl font-normal break-word">Our geofencing feature<br/>uses cutting-edge technology<br/>to create virtual boundaries<br/>around specific geographical<br/>areas.</div>
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                            <img className="w-[469px] h-[274px] rounded-[88px]" src={geofencing} />
                        </div>
                    </div>

    </div>
                <footer className="h-full w-full bottom-0 mt-20">
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
                                <li className="pb-2">Bol Baby Bol</li>
                                <li className="pb-2">Rock and Roll</li>
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
                        <div className="w-full pt-10 pl-20 text-[#6F6C90] text-sm font-dm-sans font-normal break-words text-left"><h>Copyright © 2022 BRIX Templates | All Rights Reserved </h></div>
                        <div className="w-full pt-10 flex text-[#170F49] text-3xl font-dm-sans font-bold break-words pl-20"><h>Rakshak</h></div>
                    </div>
                </footer>
            </div>
        </div>
    )
}