import Sidebar from "./components/Sidebar";
import ProneAreas from "./components/ProneAreas";
import AwarenessSessions from "./components/Awareness Sessions";
import TopBar from "./components/TopBar";
import DisasterSurvivorStories from "./components/DisasterSurvivorStories";
import React, {useEffect, useState} from "react";
import SaferExits from "./components/SaferExits";
import AccessFeasibility from "./components/AccessFeasibility";
import ObjectRecognition from "./components/ObjectRecognition";
import Information from "./components/Information";
import AlternativeRoutes from "./components/AlternativeRoutes";
import NaturalHazardAlerts from "./components/NaturalHazardAlerts";
import ContinuousAlerts from "./components/ContinuousAlerts";
import LocalBusinessIncentives from "./components/LocalBusinessIncentives";
import ReliefTokens from "./components/ReliefTokens";
import PingForHelp from "./components/PingForHelp";
import {useParams} from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const {section} = useParams();
    const [selectedSubMenu, setSelectedSubMenu] = useState(section);

    const handleSubMenuClick = (selectedSubMenu) => {
        setSelectedSubMenu(selectedSubMenu);
    };
    useEffect(() => {
  window.scrollTo(0,0)
}, []);
    return (
        <div className="flex font-sans h-full">
            <div className="w-1/5 max-md:w-24 fixed overflow-x-clip">
                {/*<div className="absolute -z-10 shadow-black w-full h-44 bg-gradient-to-br from-opacity-10 to-opacity-0 backdrop-blur-md border border-opacity-18 border-white shadow-lg p-6"></div>*/}
                <Sidebar onSubMenuClick={handleSubMenuClick} />
            </div>
            <div className="ml-[305px] w-full max-md:w-full relative">
                <TopBar />
                {/*<ProneAreas />*/}
                {/*<DisasterSurvivorStories/>*/}
                {/*{selectedSubMenu === 'Prone Area Alerts' && <ProneAreas />}*/}
                {selectedSubMenu === 'Awareness Sessions' && <AwarenessSessions />}
                {/*{selectedSubMenu === 'Safer Exits' && <SaferExits />}*/}
                {/*{selectedSubMenu === 'Access Feasibility' && <AccessFeasibility />}*/}
                {/*{selectedSubMenu === 'Object Recognition' && <ObjectRecognition />}*/}
                {selectedSubMenu === 'Disaster Survivor Stories' && <DisasterSurvivorStories />}
                {/*{selectedSubMenu === 'Information' && <Information />}*/}
                {/*{selectedSubMenu === 'Alternative Routes' && <AlternativeRoutes />}*/}
                {selectedSubMenu === 'Natural Hazard Alerts' && <NaturalHazardAlerts />}
                {selectedSubMenu === 'Continuous Alerts' && <ContinuousAlerts />}
                {/*{selectedSubMenu === 'Local Business Incentives' && <LocalBusinessIncentives />}*/}
                {selectedSubMenu === 'Relief Tokens' && <ReliefTokens />}
                {selectedSubMenu === 'Ping for Help' && <PingForHelp />}
            </div>
        </div>
        );
};

export default Dashboard;