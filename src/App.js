"use client";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import ToggleSwitch from "./components/ToggleSwitch";

// Import other page components
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import CV from "./pages/CV";
import Quotes from "./pages/Quotes";
import Books from "./pages/Books";
import Music from "./pages/Music";
import Pictures from "./pages/Pictures";
import Blog from "./pages/Blogs/Blog";
import ShowsTV from "./pages/ShowsTV";
import LeaveNote from "./pages/LeaveNotes/LeaveNote";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [isChaos, setIsChaos] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (isChaos) {
      setIsChaos(false);
    } else {
      navigate("/");
      setIsChaos(true);
    }
  };

  return (
    <div className="app">
      <div className="toggle-container">
        <ToggleSwitch isOn={isChaos} handleToggle={handleToggle} />
      </div>
      <Sidebar isVisible={!isChaos} />
      <Routes>
        <Route
          path="/"
          element={<HomePage isChaos={isChaos} setIsChaos={setIsChaos} />}
        />
        <Route path="/projects" element={<Projects isChaos={isChaos} />} />
        <Route path="/research" element={<Research isChaos={isChaos} />} />
        <Route path="/cv" element={<CV isChaos={isChaos} />} />
        <Route path="/quotes" element={<Quotes isChaos={isChaos} />} />
        <Route path="/books" element={<Books isChaos={isChaos} />} />
        <Route path="/music" element={<Music isChaos={isChaos} />} />
        <Route path="/pictures" element={<Pictures isChaos={isChaos} />} />
        <Route path="/blog" element={<Blog isChaos={isChaos} />} />
        <Route path="/shows-tv" element={<ShowsTV isChaos={isChaos} />} />
        <Route
          path="/leave-me-a-note"
          element={<LeaveNote isChaos={isChaos} />}
        />
      </Routes>
    </div>
  );
};

export default App;
