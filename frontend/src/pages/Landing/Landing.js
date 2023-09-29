import {useState} from 'react'
import sih from "./Video/sih.webm"
import rakshak from "./Images/rakshak.png"

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

    return (
        <div className={"font-sans"}>
            <div
                className="absolute inset-0 z-0 h-full bg-gradient-to-b from-opacity-50 via-opacity-50 from-[#C1BDBD]/50 to-[#C1BDBD]/50 backdrop-blur-[15px]">
            </div>
            <div className="absolute inset-0 z-[-1] h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={sih} type="video/webm"/>
                </video>
            </div>
            <header className="absolute inset-x-0 top-0 z-50">
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
                        className="font-bold rounded-full border-5 px-14 py-6 bg-black inline-flex content-center items-center gap-3 absolute text-white text-2xl font-semibold max-md:text-lg max-md:px-12 max-md:py-4">Register
                    </button>
                </div>
            </header>
        </div>
    )
}