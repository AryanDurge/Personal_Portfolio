import React from 'react'
import '../css/styles.css'  
import '../css/skins/color-1.css'
import '../css/skins/color-2.css'
import '../css/style-switcher.css'
import mePic from '../images/me.jpg'
import { Link } from 'react-router-dom'

import TypingEffect from '../Typing_effect/TypingEffect.js'

const Home = () => {
  const phrases = ["Web Developer", "Cloud Practioner", "Data Engineer", "DevOps Engineer"];
  return (
    <div>
        <section className="home section active s-link" id="home">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello">Hello, my name is <span className="name">Aryan Durge</span></h3>
                            <h3 className="my-profession">I'm a <TypingEffect phrases={phrases} typingSpeed={100} erasingSpeed={80} newPhraseDelay={2000} /></h3>
                            <p>I am a self-trained web developer with a growing repertoire of projects ranging from
                                beginner to advanced level. I am ambitious to put my skills into the field in a junior
                                web developer role where I can support high-end web and app solutions, bring in my
                                strong drive to push through challenges, and grow my knowledge in a team of experts.
                                <br /> On this site, you will find details about me and all my work and expertise.</p>
                            <Link to="/contact" className="btn contact-me a-link">Contact</Link>
                        </div>
                        <div className="home-img padd-15">
                            <img id="me-img1" src={mePic} alt="profile-pic" />
                            <img className="hidden" id="me-img2" src={mePic} alt="profile-pic" />
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Home;
