import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import './TopBar.css'

import logo from './assets/Logo.png';

function TopBar() {
    return (
        <div className="TopBar">
            <Router>
                <img className='Logo' src={logo} alt='Logo'></img>
                <nav className='NavBar'>
                    <div className='HomeButton'><Link to="/"><b>HOME</b></Link> {' '}</div>
                    <div className='AboutButton'><Link to="/about"><b>ABOUT</b></Link> {' '}</div>
                    <div className='ProjectsButton'><Link to="/projects"><b>PROJECTS</b></Link> {' '}</div>
                </nav>
                <div className='Links'>
                    <a href="mailto:rivercook2602@protonmail.com"><b>rivercook2602@protonmail.com |</b></a>
                    <div><a href='https://github.com/riverundertheotter' target="_blank"><b>Github |</b></a></div>
                    <div><a href='https://www.linkedin.com/in/river-cook/' target="_blank"><b>LinkedIn</b></a></div>
                </div>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                </Routes>
            </Router >
        </div >
    )

} export default TopBar;