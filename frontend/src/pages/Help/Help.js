
import Sidebar from "../Dashboard/components/Sidebar";
import TopBar from "../Dashboard/components/TopBar";
import Contact from "./Contact";

const Help= () => {
    return (
        <div className="flex font-sans h-screen">
            <div className="w-1/5 max-md:w-24">
                <Sidebar/>
            </div>
            <div className="w-4/5 max-md:w-full">
                <TopBar/>
                
                <Contact/>
            </div>
        </div>
        );
};
export default Help;