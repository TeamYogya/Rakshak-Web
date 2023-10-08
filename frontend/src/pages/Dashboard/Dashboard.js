import Sidebar from "./components/Sidebar";
import ProneAreas from "./components/ProneAreas";
import TopBar from "./components/TopBar";
import DisasterSurvivorStories from "./components/DisasterSurvivorStories";

const Dashboard = () => {
    return (
        <div className="flex font-sans h-screen">
            <div className="w-1/5 max-md:w-24">
                <Sidebar />
            </div>
            <div className="w-4/5 max-md:w-full">
                <TopBar />
                {/*<ProneAreas />*/}
                <DisasterSurvivorStories/>
            </div>
        </div>
        );
};

export default Dashboard;