import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import ToggleSwitch from './components/ToggleSwitch';

// Import other page components
import Projects from './pages/Projects';
import Research from './pages/Research';
import CV from './pages/CV';
import Quotes from './pages/Quotes';
import Books from './pages/Books';
import Music from './pages/Music';
import Pictures from './pages/Pictures';
import Blog from './pages/Blog';
import ShowsTV from './pages/ShowsTV';
import LeaveNote from './pages/LeaveNote';

const App = () => {
  const [isChaos, setIsChaos] = useState(true);

  const handleToggle = () => setIsChaos(!isChaos);

  return (
    <Router>
      <div className="app">
        <div className="toggle-container">
          <ToggleSwitch isOn={isChaos} handleToggle={handleToggle} />
        </div>
        <Sidebar isVisible={!isChaos} />
        <Routes>
          <Route path="/" element={<HomePage isChaos={isChaos} />} />
          <Route path="/projects" element={<Projects isChaos={isChaos} />} />
          <Route path="/research" element={<Research isChaos={isChaos} />} />
          <Route path="/cv" element={<CV isChaos={isChaos} />} />
          <Route path="/quotes" element={<Quotes isChaos={isChaos} />} />
          <Route path="/books" element={<Books isChaos={isChaos} />} />
          <Route path="/music" element={<Music isChaos={isChaos} />} />
          <Route path="/pictures" element={<Pictures isChaos={isChaos} />} />
          <Route path="/blog" element={<Blog isChaos={isChaos} />} />
          <Route path="/shows-tv" element={<ShowsTV isChaos={isChaos} />} />
          <Route path="/leave-me-a-note" element={<LeaveNote isChaos={isChaos} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;