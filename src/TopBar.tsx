import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import './TopBar.css'

function TopBar() {
    return (
        <div className="TopBar">
            <Router>
                <nav className='NavBar'>
                    <div className='HomeButton'><Link to="/">Home</Link> {' '}</div>
                    <div className='AboutButton'><Link to="/about">About</Link> {' '}</div>
                    <div className='ProjectsButton'><Link to="/projects">Projects</Link> {' '}</div>
                </nav>
                <div className='Links'>
                    <div><a href='https://github.com/riverundertheotter' target="_blank">Github </a></div>
                    <div><a href='https://www.linkedin.com/in/river-cook/' target="_blank">LinkedIn </a></div>
                </div>
                <div className='ContactInfo'>
                    Email: <a href="mailto:rivercook2602@protonmail.com">rivercook2602@protonmail.com</a>
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