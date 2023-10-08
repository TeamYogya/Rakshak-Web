import Sidebar from "./components/Sidebar";
import ProneAreas from "./components/ProneAreas";
import TopBar from "./components/TopBar";
import DisasterSurvivorStories from "./components/DisasterSurvivorStories";
import {useState} from "react";
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

const Dashboard = () => {
    const [selectedSubMenu, setSelectedSubMenu] = useState(null);

    const handleSubMenuClick = (selectedSubMenu) => {
        setSelectedSubMenu(selectedSubMenu);
    };

    return (
        <div className="flex font-sans h-screen">
            <div className="w-1/5 max-md:w-24">
                <Sidebar onSubMenuClick={handleSubMenuClick} />
            </div>
            <div className="w-4/5 max-md:w-full">
                <TopBar />
                {/*<ProneAreas />*/}
                {/*<DisasterSurvivorStories/>*/}
                {selectedSubMenu === 'Prone Area Alerts' && <ProneAreas />}
                {selectedSubMenu === 'Safer Exits' && <SaferExits />}
                {selectedSubMenu === 'Access Feasibility' && <AccessFeasibility />}
                {selectedSubMenu === 'Object Recognition' && <ObjectRecognition />}
                {selectedSubMenu === 'Disaster Survivor Stories' && <DisasterSurvivorStories />}
                {selectedSubMenu === 'Information' && <Information />}
                {selectedSubMenu === 'Alternative Routes' && <AlternativeRoutes />}
                {selectedSubMenu === 'Natural Hazard Alerts' && <NaturalHazardAlerts />}
                {selectedSubMenu === 'Continuous Alerts' && <ContinuousAlerts />}
                {selectedSubMenu === 'Local Business Incentives' && <LocalBusinessIncentives />}
                {selectedSubMenu === 'Relief Tokens' && <ReliefTokens />}
                {selectedSubMenu === 'Ping For Help' && <PingForHelp />}
            </div>
        </div>
        );
};

export default Dashboard;