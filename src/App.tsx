import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import { useState } from 'react'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className="TopBar" />
      <Router>
        <nav className='NavBar'>
          <Link to="/">Home</Link> {' '}
          <Link to="/about">About</Link> {' '}
          <Link to="/projects">Projects</Link> {' '}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
      {/* <Link to="/about">About</Link>; */}
    </div>
  )
}

export default App
