import React from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css'

export const Aside = () => {
  return (
    <div>
        <div className="aside">
            <div className="logo">
                <a href="#andras" className="andras a-link"><span>A</span>ryan</a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <nav>
                <ul className="nav">
                    <li><Link to="/" className="active a-link nav-fade-in-1"> <i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to="/about" className="a-link nav-fade-in-2"> <i className="fa fa-user"></i> About</Link></li>
                    <li><Link to="/expertise" className="a-link nav-fade-in-3"> <i className="fa-solid fa-code"></i> Expertise </Link></li>
                    <li><Link to="/projects" className="a-link nav-fade-in-4 "> <i className="fa fa-briefcase"></i> Projects</Link></li>
                    <li><Link to="/contact" className="a-link nav-fade-in-5"> <i className="fa fa-comments"></i> Contact</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
