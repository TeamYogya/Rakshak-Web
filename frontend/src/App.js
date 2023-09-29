import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
    <Route exact path="/" element={<Landing />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
      </Router>
</div>
  );
}

export default App;
