import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Expertise from './Expertise';
import Contact from './Contact';
import Projects from './Projects';

import '../css/styles.css';
import '../css/skins/color-1.css';
import '../css/skins/color-2.css';
import '../css/style-switcher.css';

export const Main = () => {
  return (
    <div className="main-content">
      <Router>
        <div className="aside">
          <div className="logo">
            <Link to="/" className="andras a-link"><span>A</span>ryan</Link>
          </div>
          <div className="nav-toggler">
            <span></span>
          </div>
          <nav>
            <ul className="nav">
              <li><Link to="/" className="a-link nav-fade-in-1"><i className="fa fa-home"></i> Home</Link></li>
              <li><Link to="/about" className="a-link nav-fade-in-2"><i className="fa fa-user"></i> About</Link></li>
              <li><Link to="/expertise" className="a-link nav-fade-in-3"><i className="fa-solid fa-code"></i> Expertise</Link></li>
              <li><Link to="/project" className="a-link nav-fade-in-4"><i className="fa fa-briefcase"></i> Projects</Link></li>
              <li><Link to="/contact" className="a-link nav-fade-in-5"><i className="fa fa-comments"></i> Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};