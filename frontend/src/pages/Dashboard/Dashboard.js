import Sidebar from "./components/Sidebar";
import ProneAreas from "./components/ProneAreas";
import TopBar from "./components/TopBar";

const Dashboard = () => {
    return (
        <div className="flex font-sans h-screen">
            <div className="w-1/5 max-md:w-24">
                <Sidebar />
            </div>
            <div className="w-4/5 max-md:w-full">
                <TopBar />
                <ProneAreas />
            </div>
        </div>
        );
};

export default Dashboard;