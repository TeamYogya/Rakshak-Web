import Sidebar from "./components/Sidebar";
import ProneAreas from "./components/ProneAreas";
import TopBar from "./components/TopBar";
import DisasterSurvivorStories from "./components/DisasterSurvivorStories";
import {useState} from "react";
import SaferExits from "./components/SaferExits";

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
            </div>
        </div>
        );
};

export default Dashboard;