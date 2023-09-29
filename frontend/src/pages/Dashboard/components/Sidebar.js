import {useState} from 'react'
import CloseIcon from '../../../assets/img/x.svg'
import NotificationIcon from '../../../assets/img/bell.svg'
import ShieldIcon from '../../../assets/img/shield.svg'
import {Link} from "react-router-dom";
const submenu = [
    {title: 'Geofencing', options: ['Prone Area Alerts', 'Safer Exits'], optionIcons: [NotificationIcon, ShieldIcon]},
    {title: 'Feasibility Prediction', options: ['Access Feasibility', 'Ping for Help'], optionIcons: ['']},
    {title: 'Awareness', options: ['Object Recognition', 'Disaster Survivor Stories'], optionIcons: ['']},
    {title: 'Assistance', options: ['Information', 'Alternative Routes'], optionIcons: ['']},
    {title: 'Alerts', options: ['Natural Hazard Alerts', 'Continuous Alerts'], optionIcons: ['']},
    {title: 'Digital Donations', options: ['Local Business Incentives', 'Relief Tokens'], optionIcons: ['']},
]
const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (index) => {
        if (openMenu === index) {
            setOpenMenu(null);
        } else {
            setOpenMenu(index);
        }
    };

    return (
        <div className={"z-10 shadow-xl h-screen"}>
            <div className="h-full overflow-y-auto bg-light_gray">
                <ul className="">
                    <li className={"flex justify-between px-4 pt-4"}>
                            <Link to="/" className="flex group">
                                <span className={"text-2xl font-bold max-md:hidden"}>Rakshak</span>
                            </Link>
                            <img src={CloseIcon} alt={"Close Icon"} className={"w-6 h-6 stroke-gray cursor-pointer max-md:hidden"} />
                    </li>
                    <li>
                        <div
                            className={"flex items-center justify-between w-full px-4 pt-4 mt-4 transition duration-75 group cursor-pointer"}
                            >
                        <span className={"font-bold text-left max-md:hidden text-purple_primary"}>Overview</span>
                        </div>
                    </li>
                    <li>
                        {submenu.map((item, index) => (
                            <li key={index}>
                                <div
                                    className="flex items-center justify-between w-full px-4 pt-4 mt-4 transition duration-75 group cursor-pointer"
                                    onClick={() => handleMenuClick(index)}
                                    >
                                    <span className={"font-bold text-left max-md:hidden"}>{item.title}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#C6C6C6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`feather max-md:hidden feather-chevron-${openMenu === index ? 'up' : 'down'}`}
                                        >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                {openMenu === index && (
                                    <ul className="pt-4 px-4 space-y-1">
                                        {item.options.map((option, optionIndex) => (
                                            <li
                                                key={optionIndex}
                                                className="flex items-center w-full text-dark_gray text-sm transition duration-75 group"
                                                >
                                                {item.optionIcons[optionIndex] && <img src={item.optionIcons[optionIndex]} alt={`Icon for ${option}`} className="mr-2 w-4 h-4" />} {/* Add optionIcons if available */}
                                                {option}
                                            </li>
                                            ))}
                                    </ul>
                                    )}
                            </li>
                            ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar