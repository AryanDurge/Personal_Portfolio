import React from 'react'
import '../css/styles.css'  
import '../css/skins/color-1.css'
import '../css/skins/color-2.css'
import '../css/style-switcher.css'

const About = () => {
  return (
    <div>
        <section className="about section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content padd-15">
                            <div className="row">
                                <div className="about-text padd-15">
                                    <h3> I'm Aryan Durge a <span> Tech Enthusiast</span></h3>
                                    <p>
                                        During My college days I have developed a passion for coding and web for which i have started my journey in exploring various technologies such as web development , cloud Practioner, Data Engineer and other various fields through various course works helped me gained a lot of knowledge to build high end web solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="personal-info padd-15">
                                    <div className="row">
                                        <div className="info-item">
                                            <p> Location : <span>
                                              <a href="https://www.google.com/maps/place/South+London/@51.4008171,-0.3337303,10z/data=!3m1!4b1!4m5!3m4!1s0x48760164c02f4ed3:0x924732ad507ab3af!8m2!3d51.3888898!4d-0.1403317"
                                                        target="_blank" rel="noreferrer">Telanagana - Hyderabad</a>
                                              </span>
                                            </p>
                                        </div>
                                        <div className="info-item">
                                            <p> LinkedIn : <span><a href="https://www.linkedin.com/in/egyeand"
                                                        target="_blank" rel="noreferrer">linkedin.com/AryanDurge</a></span></p>
                                        </div>
                                        <div className="info-item">
                                            <p> GitHub : <span><a
                                                        href="https://github.com/AryanDurge">github.com/AryanDurge</a></span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="buttons">
                                            <button className="btn trigger" onClick={() => window.open('https://drive.google.com/file/d/1F7LTpqAW0uugbBNrcDKc6rXSpPssAiLG/view?usp=sharing', '_blank')}>
                                                Download CV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills padd-15">
                                    <div className="row">
                                        <div className="skills-item">
                                            <h5>HTML / CSS / BOOTP</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width:"80%"}}></div>
                                                <div className="skill-percent">80%</div>
                                            </div>
                                        </div>
                                        <div className="skills-item">
                                            <h5>JS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width:"75%"}}></div>
                                                <div className="skill-percent">75%</div>
                                            </div>
                                        </div>
                                        <div className="skills-item">
                                            <h5>REACT</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width:"70%"}}></div>
                                                <div className="skill-percent">70%</div>
                                            </div>
                                        </div>
                                        <div className="skills-item">
                                            <h5>REDUX / RTK</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width:"50%"}}></div>
                                                <div className="skill-percent">50%</div>
                                            </div>
                                        </div>
                                        <div className="skills-item">
                                            <h5>REACT - NATIVE</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width:"60%"}}></div>
                                                <div className="skill-percent">60%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="experiance padd-15">
                                    <h3 className="title">Experience</h3>
                                    <div className="row">
                                        <div className="timeline-box padd-15">
                                            <div className="timeline shadow-dark">
                                                {/* <!------===== timeline items =====-------> */}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2023 - [JUNE - AUG]
                                                    </h3>
                                                    <h4 className="timeline-title">Cloud Practioner</h4>
                                                    <p className="timeline-text">In my current role as a Cloud Practitioner, I specialize in leveraging AWS cloud technologies to deliver high-end, real-time products. My responsibilities encompass managing and optimizing AWS services, such as EC2, S3, and Lambda, to ensure efficient and scalable solutions. I collaborate closely with cross-functional teams, including development, operations, and business stakeholders, to implement robust cloud architectures. Additionally, I utilize advanced management tools like Quinyx, Dynamics, Jira, Power BI, and Miro to streamline processes, support strategic initiatives, and maintain compliance with service level agreements. My expertise in AWS and hands-on experience with cloud-based projects enable me to drive innovation and enhance overall operational efficiency.</p>
                                                </div>
                                                {/* <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2021 - 2023
                                                    </h3>
                                                    <h4 className="timeline-title">Deputy manager / Care Coordinator</h4>
                                                    <p className="timeline-text">As a Deputy Manager, I was overseeing the
                                                        daily and long-term business, being responsible for the
                                                        maintenance of a consistent quality in the care & service
                                                        support delivered to clients whilst staying aligned with
                                                        business objectives and economical consistency. My daily tasks
                                                        range from monitoring and analysing workflow and client
                                                        satisfaction, handling all internal CRM and workflow systems
                                                        using a combination of PASS and Staffplan.</p>
                                                </div> */}
                                                {/* <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2020 - Present
                                                    </h3>
                                                    <h4 className="timeline-title">Care Coordinator </h4>
                                                    <p className="timeline-text">As a next step in my career at Caremark, I
                                                        stepped up as a Care Coordinator planning and organizing
                                                        the daily business, handling digital record of all workstreams,
                                                        employees and clients, and ensuring compliance with all
                                                        internally used systems and implemented procedures. Besides
                                                        this, I supported the senior management with reports around
                                                        budget allocation, staff development and client growth. </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2018 - 2019
                                                    </h3>
                                                    <h4 className="timeline-title">Field Care Supervisor</h4>
                                                    <p className="timeline-text">I started at Caremark as a Field Care
                                                        Supervisor. In this position I was mainly responsible for
                                                        monitoring and supervising the Care workers in the field, but I
                                                        also took over a mentoring function to support workers in daily
                                                        business challenges or general development. Another essential
                                                        part of my work scope was running trainings and practical
                                                        inductions to ensure the quality of work we provided as a
                                                        business.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2012 - 2018
                                                    </h3>
                                                    <h4 className="timeline-title">Various Positions</h4>
                                                    <p className="timeline-text">The decision and execution in moving to the
                                                        United Kingdom came with multiple challenges, particularly in
                                                        regards to language and transferrable skills and education. So I
                                                        set foot in this new country by trying a variety of generic
                                                        service and logistical jobs, such as working as a shop
                                                        assistant, gardener, support worker and many more. </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2010 - 2011
                                                    </h3>
                                                    <h4 className="timeline-title">School Teacher</h4>
                                                    <p className="timeline-text">My initial profession was teaching,
                                                        inspired by my grandparents who were teachers themselves. I
                                                        taught fifth and sixth graders in arts and crafting and helped
                                                        them develop their creative skills. I was in leading role in the
                                                        organization and execution of school events, which covered idea
                                                        collection, event preparation and management, supporting pupils
                                                        in the different activities provided, security management, and
                                                        more.</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="education padd-15">
                                    <h3 className="title">Education</h3>
                                    <div className="row">
                                        <div className="timeline-box padd-15">
                                            <div className="timeline shadow-dark">
                                                {/* <!------===== timeline items =====-------> */}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2024-present
                                                    </h3>
                                                    <h4 className="timeline-title">College</h4>
                                                    <p className="timeline-text">
                                                    My name is Aryan, and I am currently in my 3rd year of IT studies at CBIT College. Throughout my academic journey, I have developed a strong foundation in key areas such as Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Operating Systems (OS), Computer Networks (CN), and the Spring Boot framework. Additionally, I have gained practical experience in Full Stack Development and Basic Machine Learning. My coursework and hands-on projects have equipped me with the skills and knowledge to tackle complex challenges in the field of information technology.</p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2019 - 2021
                                                    </h3>
                                                    <h4 className="timeline-title">Intermediate College</h4>
                                                    <p className="timeline-text">
                                                    {/* This comprehensive course cover a massive
                                                        amount of tools and technologies. Front-end: HTML5, CSS3,
                                                        Bootstrap4, Javascript ES6, DOM Manipulation, jQuery, Bash
                                                        Command Line, Git, GitHub and Version Control. Back-end:
                                                        Node.js, NPM, Express.js, EJS, REST APIs, Databases, SQL,
                                                        MongoDB, React.js, React Hooks, GitHub Pages, Heroku, and
                                                        MongoDB Atlas. */}
                                                        During my high school years in classes 11th and 12th, I pursued a rigorous curriculum at Narayana Jr college. Scored aggregate of 96% overall Focused on a science stream, I delved into comprehensive studies encompassing Mathematics, Physics, and Chemistry. Through engaging coursework and practical laboratory sessions, I honed my analytical thinking, problem-solving abilities, and scientific inquiry skills. My dedication to mastering these subjects laid a strong academic foundation, preparing me for further studies and future endeavors in the field of science and technology.
                                                        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                                                            target="_blank" rel="noreferrer">See more</a>
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2008 - 2018
                                                    </h3>
                                                    <h4 className="timeline-title">Schooling</h4>
                                                    <p className="timeline-text">I have done my schooling from the state Board of Telanagana had a aggreagte score of 9.8 cgpa with good academics and Sports activities actively participating in a lot of events and sports. Once won a silver and a brownze medal in 100mts and 800mts running race.
                                                    </p>
                                                </div>
                                                {/* <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2016 - 2017
                                                    </h3>
                                                    <h4 className="timeline-title">Diploma in Health & Social Care (Level 3)
                                                    </h4>
                                                    <p className="timeline-text">I went through this degree course for
                                                        Senior positions to further develop in my career and to gather
                                                        valuable additional knowledge in team leadership and team
                                                        development. It educated me on subjects around Duty of Care,
                                                        diversity and inclusion, communication, and safeguarding. It
                                                        helped me to demonstrate occupational competence and enhance
                                                        professional development in
                                                        Health Care and business overall.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2005 - 2009
                                                    </h3>
                                                    <h4 className="timeline-title">Primary Teacher BA</h4>
                                                    <p className="timeline-text">On my initial journey in becoming a
                                                        teacher, I achieved this Bachelor in Primary Teaching with a
                                                        focus on Pedagogy and Psychology. The credit-based course also
                                                        included core subjects like Language, Mathematics, Science, RE,
                                                        Humanities, Music, Design as well as Technology and Computing.
                                                        This BA certifies me to teach any subject to children between 7
                                                        and 11 years old and Arts to teens between 11 and 13 years.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2004 - 2005
                                                    </h3>
                                                    <h4 className="timeline-title">Mathematics and Informatics (2 semester)
                                                    </h4>
                                                    <p className="timeline-text"> I started studying mathematics and
                                                        Informatics based on my personal interest for these subjects and
                                                        any logical tasks. However, while my year of studying at
                                                        university, I
                                                        realized that these subjects on a scientific level were too hard
                                                        for me at the time and considered it not the profession for me
                                                        to
                                                        strive forward to.
                                                    </p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default About;
