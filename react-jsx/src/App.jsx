import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './page/Home';
import Project from './page/Project';
import Todo from './page/Todo';
import Weather from './page/Weather';
import Contact from './page/Contact';
import Resume from './Resume';
import './App.css';

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} mb-6 shadow-md`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Aishat | Frontend Developer</h1>

        <div className="flex items-center gap-4">
          
          <button
            onClick={toggleDarkMode}
            className="text-lg border px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-classic-gold">Home</Link>
          <Link to="/project" className="hover:text-classic-gold">Projects</Link>
          <Link to="/contact" className="hover:text-classic-gold">Contact</Link>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-2 px-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/project" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'bg-gray-950 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;