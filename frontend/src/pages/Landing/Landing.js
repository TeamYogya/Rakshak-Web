import { useState, useEffect } from 'react';
import sih from "./Video/sih.webm"
import rakshak from "./Images/rakshak.png"
import ashoka from "./Images/ashoka.png"
import geofencing from "./Images/geofencing.jpg"
import mock from "./Images/mock.jpg"
import phone1 from "./Images/phone1.jpg"
import phone2 from "./Images/phone2.jpg"

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
                                className="h-12 w-auto"
                                src={rakshak}
                                alt="Rakshak"
                            />
                            <span className="text-bold ml-2 text-2xl italic max-md:text-xl">Rakshak</span>
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
                <div className="h-40 bg-gradient-to-b from-[#606060] to-white"></div>
                <div className="pt-40 pb-10 text-black text-5xl font-normal break-word"><h>Your Path to Resilience Explore What Our Site Offers</h></div>
                <div className="justify-center h-screen w-full grid grid-rows-3">
      <div className="grid grid-cols-2 gap-4 w-[1063px] h-[394px] bg-[#1A222C] rounded-3xl hover:bg-gradient-to-br from-[#07C557] via-[#1A222C] to-transparent">
          <div className="h-full w-full flex justify-center">
              <h className="absolute pt-10 text-white text-3xl font-bold break-word">Geofencing</h>
              <h className="absolute pt-[114px] text-center text-[#C9C9C9] text-3xl font-normal break-word">Our geofencing feature<br/>uses cutting-edge technology<br/>to create virtual boundaries<br/>around specific geographical<br/>areas.</h>
          </div>
          <div className="h-full w-full flex items-center justify-center">
              <img className="absolute w-[469px] h-[274px] rounded-[88px]" src={geofencing} />
          </div>
      </div>

                    <div className="mt-[175px] w-[525px] h-[764px] rounded-3xl bg-[#1A222C] hover:bg-gradient-to-tr from-[#FEA800] via-[#1A222C] to-transparent">
                        <div>
                            <div className="ml-[100px] mt-[58px] absolute text-center text-white text-3xl font-bold break-word">Feasibility Prediction</div>
                            <div className="ml-[10px] mt-[120px] absolute text-center text-[#C9C9C9] text-3xl font-normal break-word">Stay ahead of disaster risks<br/>with our feasibility prediction tool</div>
                        </div>
                        <div>
                            <div id="phone1Id" className="mt-[362px] bg-[-238.722px_-28px] w-[287px] h-[402px] absolute rounded-[40px] overflow-hidden bg-no-repeat bg-[length:766.989px_430.434px]"></div>
                            <div id="phone2Id" className="ml-[255px] mt-[216px] bg-[-97.006px_-54.658px] w-[270px] h-[548px] absolute rounded-[40px] overflow-hidden bg-no-repeat bg-[length:464.0112px_651.298px]"></div>
                        </div>
      </div>
                    <div className="mt-[720px] grid grid-cols-2 gap-4 w-[1063px] h-[394px] bg-[#1A222C] rounded-3xl hover:bg-gradient-to-tl from-[#07C557] via-[#1A222C] to-transparent">
                        <div className="h-full w-full flex items-center justify-center">
                            <img className="absolute w-[469px] h-[274px] rounded-[88px]" src={mock} />
                        </div>
                        <div className="h-full w-full flex justify-center">
                            <h className="absolute pt-10 text-white text-3xl font-bold break-word">Mock Exercises and Programs</h>
                            <h className="absolute pt-[114px] text-center text-[#C9C9C9] text-3xl font-normal break-word">Practice makes perfect,<br/>especially when it<br/>comes to disaster readiness.</h>
                        </div>
                    </div>
      {/*<div className="width: 525px; height: 764px; left: 593px; top: 1052px; position: absolute">*/}
      {/*  <div className="width: 525px; height: 764px; left: 0px; top: 0px; position: absolute; background: linear-gradient(155deg, #1A222C 64%, #7000FE 100%); border-radius: 26px"></div>*/}
      {/*  <img className="width: 523px; height: 427px; left: 0px; top: 0px; position: absolute; border-radius: 25px" src="https://via.placeholder.com/523x427" />*/}
      {/*  <div className="left: 31px; top: 597px; position: absolute; text-align: center; color: #C9C9C9; font-size: 32px; font-family: Inter; font-style: italic; font-weight: 400; word-wrap: break-word">Knowledge is power especially<br/>in disaster management</div>*/}
      {/*  <div className="left: 31px; top: 490px; position: absolute; color: white; font-size: 36px; font-family: Inter; font-weight: 700; word-wrap: break-word">Education and Awareness</div>*/}
      {/*</div>*/}
      {/*<div className="width: 525px; height: 523px; left: 593px; top: 513px; position: absolute">*/}
      {/*  <div className="width: 525px; height: 523px; left: 0px; top: 0px; position: absolute; background: linear-gradient(45deg, #1A222C 45%, #FEA800 100%); border-radius: 26px"></div>*/}
      {/*  <div className="width: 464px; height: 82px; left: 40px; top: 258px; position: absolute; text-align: center; color: #C9C9C9; font-size: 48px; font-family: Inter; font-style: italic; font-weight: 400; word-wrap: break-word">Timely information can make all the difference during an emergency.</div>*/}
      {/*  <div className="width: 457px; height: 30.12px; left: 26px; top: 58px; position: absolute; color: white; font-size: 36px; font-family: Inter; font-weight: 700; word-wrap: break-word">Alerts<br/>and<br/>Notifications</div>*/}
      {/*</div>*/}
      {/*<div className="width: 525px; height: 523px; left: 53px; top: 1293px; position: absolute">*/}
      {/*  <div className="width: 525px; height: 523px; left: 0px; top: 0px; position: absolute; background: linear-gradient(315deg, #1A222C 45%, #7000FE 100%); border-radius: 26px"></div>*/}
      {/*  <img className="width: 289px; height: 249px; left: 0px; top: 0px; position: absolute; border-radius: 25px" src="https://via.placeholder.com/289x249" />*/}
      {/*  <div className="width: 464px; height: 82px; left: 40px; top: 258px; position: absolute; text-align: center; color: #C9C9C9; font-size: 48px; font-family: Inter; font-style: italic; font-weight: 400; word-wrap: break-word">In the chaos of a disaster, finding the right information quickly is crucial</div>*/}
      {/*  <div className="width: 457px; height: 30.12px; left: 47px; top: 39px; position: absolute; text-align: right; color: white; font-size: 36px; font-family: Inter; font-weight: 700; word-wrap: break-word">User<br/>Assistance<br/>and<br/>Navigation</div>*/}
      {/*</div>*/}
    </div>
            </div>
        </div>
    )
}