import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Story from "./pages/Dashboard/components/Story";
import CategorisedStory from "./pages/Dashboard/components/CategorisedStory";
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Registrations from "./pages/MockDrills/Registrations/Registrations";
import ReliefTokens from "./pages/Dashboard/components/ReliefTokens";
import Donate from "./pages/Dashboard/components/Donate";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/dashboard/:section" element={<Dashboard/>}/>
                    <Route exact path="/Story/:storyId" element={<Story/>}/>
                    <Route exact path="/CategorisedStory/:storyId" element={<CategorisedStory/>}/>
                    <Route exact path="/CategorisedStory/:storyType" element={<CategorisedStory/>}/>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/signup" element={<Signup/>}></Route>
                    <Route exact path="/relieftokens" element={<ReliefTokens/>}></Route>
                    <Route exact path="/donate" element={<Donate/>}></Route>
                    <Route exact path="/registrations" element={<Registrations/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
