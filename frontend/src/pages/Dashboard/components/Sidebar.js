import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const submenu = [
    {
        title: 'Mock Exercises',
        options: ['Registrations', 'Awareness Sessions'],
        optionIcons: [
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell max-md:w-6 max-md:h-6 max-md:mb-4 max-md:mt-8">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield max-md:w-6 max-md:h-6 max-md:mb-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        ],
    },
    {
        title: 'Geofencing',
        options: ['Prone Area Alerts', 'Safer Exits'],
        optionIcons: [
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell max-md:w-6 max-md:h-6 max-md:mb-4 max-md:mt-8">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield max-md:w-6 max-md:h-6 max-md:mb-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        ],
    },
    {
        title: 'Feasibility Prediction',
        options: ['Access Feasibility', 'Ping for Help'],
        optionIcons: [
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user max-md:w-6 max-md:h-6 max-md:mb-4">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle max-md:w-6 max-md:h-6 max-md:mb-4">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        ],
    },
    {
        title: 'Awareness',
        options: ['Object Recognition', 'Disaster Survivor Stories'],
        optionIcons: [
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search max-md:w-6 max-md:h-6 max-md:mb-4">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open max-md:w-6 max-md:h-6 max-md:mb-4">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
        ],
    },
    {
        title: 'Assistance',
        options: ['Information', 'Alternative Routes'],
        optionIcons: [
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info max-md:w-6 max-md:h-6 max-md:mb-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-branch max-md:w-6 max-md:h-6 max-md:mb-4">
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
            </svg>
        ],
    },
    {
        title: 'Alerts',
        options: ['Natural Hazard Alerts', 'Continuous Alerts'],
        optionIcons: [
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle max-md:w-6 max-md:h-6 max-md:mb-4">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-octagon max-md:w-6 max-md:h-6 max-md:mb-4">
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        ],
    },
    {
        title: 'Digital Donations',
        options: ['Local Business Incentives', 'Relief Tokens'],
        optionIcons: [
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign max-md:w-6 max-md:h-6 max-md:mb-4">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>,
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase max-md:w-6 max-md:h-6 max-md:mb-4"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        ],
    },
    ];

const Sidebar = ({ onSubMenuClick } ) => {
  const [openMenu, setOpenMenu] = useState(Array(submenu.length).fill(true));
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleMenuClick = (index) => {
    const updatedMenuState = [...openMenu];
    updatedMenuState[index] = !updatedMenuState[index];
    setOpenMenu(updatedMenuState);
  };

  const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubMenuItemClick = (option) => {
        // Pass the selected submenu item to the parent component
        onSubMenuClick(option);
  };

return (
    <div className="z-10 shadow-xl h-screen">
        <div className="h-full overflow-y-auto bg-light_gray">
            <ul>
                <li className="flex justify-between px-4 pt-4 max-md:justify-center max-md:items-center">
                    <Link to="/" className="flex group">
                        <span className="text-2xl font-bold max-md:hidden">Rakshak</span>
                    </Link>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x w-6 h-6 stroke-gray cursor-pointer max-md:hidden"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu w-6 h-6 stroke-gray cursor-pointer hidden max-md:inline ${
                        isSidebarOpen ? 'block' : 'hidden'}"
                        onClick={handleSidebarToggle} />

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu w-6 h-6 stroke-gray cursor-pointer hidden max-md:inline"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>


                </li>
                <li className="flex justify-between px-4 pt-4 mt-4 max-md:hidden">
                    <Link to="/dashboard" className="flex group">
                        <span className="font-bold max-md:hidden text-purple_primary">Overview</span>
                    </Link>
                </li>
                <li>
                    {submenu.map((item, index) => (
                        <li key={index}>
                            <div className="flex items-center justify-between w-full px-4 pt-4 mt-4 transition duration-75 group cursor-pointer max-md:hidden" onClick={() => handleMenuClick(index)}>
                                <span className="font-bold text-left">{item.title}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6C6C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather max-md:hidden feather-chevron-${openMenu[index] ? 'up' : 'down'}`}>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                            {openMenu[index] && (
                                <ul className="pt-4 max-md:pt-0 px-4 space-y-1">
                                    {item.options.map((option, optionIndex) => (
                                        <li key={optionIndex} className="flex items-center text-dark_gray text-left text-sm transition duration-75 gap-2 cursor-pointer max-md:justify-center group"
                                        onClick={() => handleSubMenuItemClick(option)}>
                                            {item.optionIcons[optionIndex]}{/* Add optionIcons if available */}
                                            <span className="max-md:hidden">{option}</span>
                                        </li>
                                        ))}
                                </ul>
                                )}
                        </li>
                        ))}
                </li>
            </ul><br /><br />
        </div>
    </div>
    );
};

export default Sidebar;