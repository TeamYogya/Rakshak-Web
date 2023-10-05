import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Story from "./pages/Dashboard/components/Story";
import CategorisedStory from "./pages/Dashboard/components/CategorisedStory";
<<<<<<< HEAD
import Help from './pages/Help/Help';


=======
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
>>>>>>> 2b5d0d9a16a23758ffd1c97ce6ad5dac91b4b8cc

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/dashboard" element={<Dashboard/>}/>
                    <Route exact path="/Story/:storyId" element={<Story/>}/>
<<<<<<< HEAD
                    <Route exact path="/CategorisedStory/:storyId" element={<CategorisedStory/>}/>
                    <Route exact path="/Help" element={<Help/>}/>
=======
                    <Route exact path="/CategorisedStory/:storyType" element={<CategorisedStory/>}/>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/signup" element={<Signup/>}></Route>
>>>>>>> 2b5d0d9a16a23758ffd1c97ce6ad5dac91b4b8cc
                </Routes>
            </Router>
        </div>
    );
}

export default App;
