import React from 'react'
import '../css/styles.css'  
import '../css/skins/color-1.css'
import '../css/skins/color-2.css'
import '../css/style-switcher.css'

const Projects = () => {
  return (
        <div>
            <section className="projects section s-link" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="projects-heading padd-15">
                            <h3>Few of my last projects and a future plan</h3>
                        </div>
                        <div className="row project-nav padd-15">
                            {/* <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#usapp">
                                            <img src="images/usapp.webp" alt="usapp"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#react-redux-calculator">
                                            <img src="/images/react-redux-calculator.webp" alt="react-redux-calculator"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#portfolio">
                                            <img src="images/portolio.webp" alt="portfolio"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#crud">
                                            <img src="images/crud.webp" alt="crud"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!-- ----===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#secrets">
                                            <img src="images/secrets.webp" alt="secrets"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#todo">
                                            <img src="images/to-do.webp" alt="todo"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#weatherapi">
                                            <img src="images/weatherapi.webp" alt="weatherapi"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#blog">
                                            <img src="images/blog.webp" alt="blog"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====------->
                            <!------===== project item start =====-------> */}
                            <div className="projects-item padd-15">
                                <div className="projects-item-inner shadow-dark">
                                    <div className="projects-img">
                                        <a className="a-link nope" href="#frost">
                                            <img src="images/frost.webp" alt="frost"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!------===== project item end =====-------> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Projects;
