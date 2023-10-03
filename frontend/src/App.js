import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Story from "./pages/Dashboard/components/Story";
import CategorisedStory from "./pages/Dashboard/components/CategorisedStory";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/dashboard" element={<Dashboard/>}/>
                    <Route exact path="/Story/:storyId" element={<Story/>}/>
                    <Route exact path="/CategorisedStory/:storyType" element={<CategorisedStory/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
