import { useState } from 'react'
import sih from "./Video/sih.webm"
import rakshak from "./Images/rakshak.png"
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Why us', href: '#' },
  { name: 'Programs', href: '#' },
  { name: 'Donate', href: '#' },
  { name: 'Safety Tips', href: '#' },
  { name: 'Contact us', href: '#' },
]
export default function Landing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
        <div className="absolute inset-0 z-0" style={{height: '750px',background: 'linear-gradient(180deg, rgba(193, 189, 189, 0.50) 108.19%, rgba(176, 170, 170, 0.00) 124.43%)',backdropFilter: 'blur(15px)',}}>
          </div>
      <div className="absolute inset-0 z-[-1]" style={{height: '750px'}}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={sih} type="video/webm" />
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
    <span className="text-bold ml-2" style={{fontSize: '30px',fontStyle: 'italic'}}>Rakshak</span>
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
              <button className="font-bold" style={{borderRadius: '105px',border: '5px solid #000',background: 'rgba(217, 217, 217, 0.00)',display: 'inline-flex',
    padding: '12px 34px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'}}>Login</button>
          </div>
        </nav>
          <div style={{
    left: '188px',
    top: '143px',
    position: 'absolute',
    color: 'black',
    fontSize: '64px',
    fontFamily: 'Inter',
    fontWeight: 400,
    wordWrap: 'break-word', textAlign: 'left',
  }}>
            Knowledge is Your<br/>
Best Defense, Explore<br/>
Disaster Preparedness<br/>
Today.<br/>
              <button className="font-bold" style={{borderRadius: '105px',
    border: '5px solid #000',
    background: '#000',
    padding: '12px 68px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px', position: 'absolute',
    color: '#FFFBFB',
    fontSize: '32px',
    fontFamily: 'Inter',
    fontWeight: 400,
    wordWrap: 'break-word',}}>Register</button>
          </div>
      </header>
    </div>
  )
}