import React from 'react'
import '../css/styles.css'  
import '../css/skins/color-1.css'
import '../css/skins/color-2.css'
import '../css/style-switcher.css'

const Expertise = () => {
  return (
    <div>
        <section className="expertise section s-link" id="expertise">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Expertise</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="expertise-text padd-15">
                            <h3> My experiences with coding languages, libraries and managers. </h3>
                            <p>Within my training studies, I could accumulate practical and theoretical knowledge in
                                various coding languages like HTML, CSS, Java Script and React which has given me a
                                robust foundation to set foot in the industry of web development. I am now looking
                                forward to building up on this and to work in a supportive team of experts who can help
                                me develop and grow.</p>
                        </div>
                    </div>
                    {/* <!------===== expertise items start =====-------> */}
                    <div className="row">
                        {/* <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/" target="_blank"
                                rel="noopener noreferrer">
                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-brands fa-html5"></i>
                                    </div>
                                    <h4>HTML</h4>
                                    <p>HTML is a fundamental markup language that is used to structure a web page and
                                        its content. It describes the arrangements and sign for presentation. I love the
                                        simplicity and straight fowardness of it.
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->
                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"
                                rel="noopener noreferrer">
                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-brands fa-css3-alt"></i>
                                    </div>
                                    <h4>CSS</h4>
                                    <p>It's responsible for visually, functionally driven websites and helps to create
                                        an enjoyable user experience. CSS is fundamental to web design. I enjoy creating
                                        new designs/animations using CSS.
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->
                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">

                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-brands fa-bootstrap"></i>
                                    </div>
                                    <h4>BS</h4>
                                    <p>Bootstrap is a powerful free and open-source CSS framework that accelerating the
                                        design process. Although I have only gained basic knowledge I used it few times
                                        on its own and also with React.
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->
                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                                rel="noopener noreferrer">

                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-brands fa-js"></i>
                                    </div>
                                    <h4>JS</h4>
                                    <p>JavaScript enables developers to create dynamic and interactive web content like
                                        applications and browsers. It can be used both front and backend. I find JS very
                                        logical and interesting to work with.
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->
                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">

                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-brands fa-node-js"></i>
                                    </div>
                                    <h4>NODE</h4>
                                    <p>Node.js can be used on the frontend as well as the back. An open-source,
                                        cross-platform executes JS code outside a web browser. Used it for used to
                                        develop real-time application paired with MongoDB.</p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->

                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">

                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-brands fa-react"></i>
                                    </div>
                                    <h4>REACT</h4>
                                    <p>ReactJS is an open-source front-end JavaScript library. It's a declarative
                                        language that helps to build complex and interactive UIs whilst carrying the
                                        potential for each component to be reusable.
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->

                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <svg fill="none" height="50" width="50" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="670.088 32.46226489559854 2224.1720000000005 2666.4877351044024">
                                            <g className="icon-svg">
                                                <path
                                                    d="M2870 1250.22c0-145.34-182.01-283.079-461.07-368.495 64.4-284.424 35.78-510.711-90.34-583.159-29.07-16.994-63.05-25.044-100.17-25.044v99.728c20.57 0 37.12 4.025 50.98 11.627 60.82 34.882 87.21 167.703 66.63 338.536-4.91 42.038-12.96 86.311-22.8 131.479-87.66-21.466-183.36-38.012-283.98-48.745-60.37-82.734-122.98-157.865-186.04-223.604 145.79-135.504 282.64-209.741 375.66-209.741v-99.727c-122.99 0-283.98 87.653-446.76 239.703-162.79-151.156-323.78-237.914-446.76-237.914v99.727c92.57 0 229.86 73.79 375.65 208.399-62.61 65.74-125.22 140.423-184.7 223.157-101.07 10.733-196.77 27.279-284.42 49.192-10.29-44.72-17.89-88.1-23.26-129.69-21.01-170.833 4.92-303.654 65.3-338.983 13.41-8.05 30.85-11.627 51.43-11.627v-99.728c-37.57 0-71.56 8.05-101.07 25.044-125.67 72.447-153.84 298.287-89 581.817C857.119 968.036 676 1105.33 676 1250.22c0 145.35 182.013 283.09 461.07 368.5-64.4 284.43-35.78 510.71 90.34 583.16 29.07 16.99 63.05 25.04 100.62 25.04 122.98 0 283.98-87.65 446.76-239.7 162.78 151.16 323.78 237.92 446.76 237.92 37.56 0 71.55-8.05 101.07-25.05 125.66-72.45 153.84-298.29 88.99-581.81 277.27-85.42 458.39-223.16 458.39-368.06zm-582.26-298.284c-16.55 57.694-37.12 117.164-60.38 176.644-18.33-35.77-37.56-71.55-58.58-107.33-20.57-35.773-42.49-70.655-64.4-104.643 63.5 9.391 124.77 21.019 183.36 35.329zm-204.83 476.274c-34.88 60.38-70.65 117.62-107.77 170.84-66.64 5.81-134.16 8.94-202.14 8.94-67.53 0-135.06-3.13-201.24-8.5-37.12-53.22-73.35-110.01-108.23-169.94-33.99-58.58-64.84-118.06-93.02-177.98 27.73-59.93 59.03-119.86 92.58-178.44 34.88-60.37 70.65-117.616 107.77-170.834 66.64-5.814 134.16-8.944 202.14-8.944 67.53 0 135.06 3.13 201.24 8.497 37.12 53.218 73.35 110.011 108.23 169.941 33.99 58.58 64.84 118.06 93.02 177.99-28.18 59.92-59.03 119.85-92.58 178.43zm144.45-58.13a1918.154 1918.154 0 0 1 61.72 177.98c-58.59 14.31-120.3 26.39-184.25 35.78 21.91-34.43 43.82-69.76 64.4-105.99 20.57-35.77 39.8-72 58.13-107.77zm-453.47 477.17c-41.59-42.94-83.18-90.79-124.32-143.11 40.25 1.79 81.39 3.13 122.98 3.13 42.04 0 83.63-.89 124.33-3.13a1746.499 1746.499 0 0 1-122.99 143.11zm-332.72-263.41c-63.5-9.39-124.77-21.02-183.35-35.33 16.54-57.69 37.12-117.17 60.37-176.65 18.34 35.78 37.57 71.56 58.58 107.33 21.02 35.78 42.49 70.66 64.4 104.65zm330.49-930.638c41.59 42.931 83.18 90.783 124.32 143.106-40.25-1.789-81.39-3.13-122.98-3.13-42.04 0-83.63.894-124.32 3.13a1746.3 1746.3 0 0 1 122.98-143.106zm-330.94 263.405c-21.91 34.435-43.82 69.764-64.39 105.983-20.57 35.78-39.8 71.56-58.14 107.33a1914.757 1914.757 0 0 1-61.71-177.984c58.58-13.863 120.29-25.938 184.24-35.329zM1036 1476.51c-158.309-67.53-260.72-156.07-260.72-226.29 0-70.21 102.411-159.2 260.72-226.28 38.46-16.55 80.5-31.308 123.88-45.171 25.49 87.651 59.03 178.881 100.62 272.351-41.14 93.02-74.24 183.8-99.28 271.01-44.27-13.87-86.31-29.07-125.22-45.62zm240.6 639.06c-60.82-34.88-87.21-167.7-66.63-338.54 4.92-42.03 12.96-86.31 22.8-131.48 87.66 21.47 183.36 38.02 283.98 48.75 60.37 82.73 122.98 157.86 186.04 223.6-145.79 135.51-282.64 209.74-375.66 209.74-20.12-.44-37.11-4.47-50.53-12.07zm1060.78-340.77c21.01 170.83-4.92 303.65-65.3 338.98-13.41 8.05-30.85 11.63-51.43 11.63-92.57 0-229.86-73.79-375.65-208.4 62.61-65.74 125.22-140.42 184.7-223.16 101.07-10.73 196.77-27.28 284.42-49.19 10.29 45.17 18.34 88.55 23.26 130.14zm172.17-298.29c-38.46 16.55-80.5 31.31-123.88 45.17-25.49-87.65-59.03-178.88-100.62-272.35 41.15-93.02 74.24-183.8 99.28-271.009 44.28 13.864 86.31 29.069 125.67 45.619 158.31 67.52 260.72 156.07 260.72 226.28-.45 70.22-102.86 159.21-261.17 226.29z" />
                                                <path
                                                    d="M1772.55 1454.6c112.88 0 204.38-91.5 204.38-204.38 0-112.87-91.5-204.37-204.38-204.37-112.87 0-204.37 91.5-204.37 204.37 0 112.88 91.5 204.38 204.37 204.38zM775.625 2578.81H708.16V2695h-38.072v-287.22h95.082c32.351 0 57.207 7.37 74.566 22.1 17.491 14.72 26.237 36.16 26.237 64.3 0 17.89-4.866 33.47-14.598 46.76-9.6 13.28-23.014 23.21-40.242 29.78l67.465 121.91v2.37h-40.637zm-67.465-30.97h58.194c18.806 0 33.732-4.87 44.779-14.6 11.178-9.73 16.767-22.75 16.767-39.06 0-17.75-5.326-31.36-15.978-40.83-10.521-9.47-25.776-14.27-45.766-14.4H708.16zm293.93 151.11c-28.936 0-52.477-9.47-70.625-28.41-18.149-19.07-27.223-44.52-27.223-76.34v-6.71c0-21.17 4.011-40.04 12.033-56.61 8.154-16.71 19.464-29.73 33.93-39.06 14.598-9.47 30.379-14.21 47.344-14.21 27.751 0 49.321 9.14 64.701 27.42 15.39 18.28 23.08 44.45 23.08 78.51v15.19H940.736c.526 21.05 6.642 38.08 18.346 51.1 11.836 12.88 26.828 19.33 44.978 19.33 12.89 0 23.8-2.63 32.74-7.89 8.95-5.26 16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.71 41.23-80.48 41.23zm-4.541-191.35c-14.729 0-27.091 5.39-37.086 16.17-9.995 10.66-16.176 25.65-18.543 44.98h106.92v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.95-10.25-21.05-15.38-36.301-15.38zM1259.52 2695c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.33-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.42-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.44-30.38-7.63-7.63-18.88-11.44-33.74-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.6 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm234.15 1.97c13.02 0 24.4-3.95 34.13-11.84s15.12-17.75 16.17-29.59h34.53c-.66 12.23-4.87 23.87-12.63 34.92s-18.15 19.86-31.17 26.43c-12.89 6.58-26.56 9.87-41.03 9.87-29.06 0-52.21-9.67-69.44-29-17.09-19.47-25.64-46.03-25.64-79.7v-6.11c0-20.78 3.81-39.26 11.44-55.43 7.63-16.18 18.54-28.74 32.75-37.68 14.33-8.95 31.23-13.42 50.69-13.42 23.94 0 43.8 7.17 59.58 21.51 15.91 14.33 24.39 32.94 25.45 55.82h-34.53c-1.05-13.81-6.31-25.12-15.78-33.93-9.33-8.94-20.91-13.41-34.72-13.41-18.54 0-32.94 6.7-43.2 20.12-10.12 13.28-15.19 32.55-15.19 57.8v6.9c0 24.59 5.07 43.53 15.19 56.81 10.13 13.29 24.6 19.93 43.4 19.93zm175.37-239.28v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.35-2.37V2695c-9.6 2.63-18.93 3.95-28.01 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.87v-28.21h38.87v-51.68zM2017.81 2695h-38.08l-144.59-221.33V2695h-38.07v-287.22h38.07l144.99 222.32v-222.32h37.68zm193.32 0c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.34-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.41-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.45-30.38-7.62-7.63-18.87-11.44-33.73-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.59 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm198.05-237.31v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.36-2.37V2695c-9.61 2.63-18.94 3.95-28.02 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.86v-28.21h38.86v-51.68zM2470.93 2695h-36.5v-213.44h36.5zm-39.46-270.06c0-5.91 1.78-10.91 5.33-14.99 3.68-4.08 9.07-6.11 16.17-6.11 7.11 0 12.5 2.03 16.18 6.11s5.52 9.08 5.52 14.99c0 5.92-1.84 10.85-5.52 14.8-3.68 3.94-9.07 5.92-16.18 5.92-7.1 0-12.49-1.98-16.17-5.92-3.55-3.95-5.33-8.88-5.33-14.8zm168.47 220.55l52.86-163.93h37.29L2613.55 2695h-27.82l-77.32-213.44h37.28zm211.07 53.46c-28.93 0-52.47-9.47-70.62-28.41-18.15-19.07-27.22-44.52-27.22-76.34v-6.71c0-21.17 4.01-40.04 12.03-56.61 8.15-16.71 19.46-29.73 33.93-39.06 14.6-9.47 30.38-14.21 47.34-14.21 27.75 0 49.32 9.14 64.71 27.42 15.38 18.28 23.08 44.45 23.08 78.51v15.19h-144.6c.53 21.05 6.64 38.08 18.35 51.1 11.83 12.88 26.83 19.33 44.97 19.33 12.89 0 23.81-2.63 32.75-7.89s16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.72 41.23-80.49 41.23zm-4.54-191.35c-14.72 0-27.09 5.39-37.08 16.17-10 10.66-16.18 25.65-18.54 44.98h106.91v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.94-10.25-21.04-15.38-36.3-15.38z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <h4>REACT NATIVE</h4>
                                    <p>An open-source UI software framework. It`s used to develop applications for
                                        Android, Android TV, iOS, macOS,
                                        tvOS, Web, Windows and UWP by using React framework
                                        with native platform capabilities.
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/*<!------===== expertise item end =====------->

                        <!------===== expertise item start =====------->*/}
                        <div className="expertise-item padd-15">
                            <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
                                <div className="expertise-item-inner">
                                <div className="icon" style={{ paddingTop: "6px" }}>
                                        <svg width="42" height="42" viewBox="0 0 256 224"
                                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                            <g className="icon-svg">
                                                <path
                                                    d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h4>REDUX & RTK</h4>
                                    <p>Redux is a small open-source JavaScript library for managing and centralizing
                                        application state. It is most commonly used with libraries such as React or
                                        Angular for building user interfaces.
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->

                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://desktop.github.com/" target="_blank" rel="noopener noreferrer">

                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-brands fa-git"></i>
                                    </div>
                                    <h4>GIT</h4>
                                    <p>Git tracks and records changes to the code. I started with Git Cli using it in a
                                        command-line environment. Later, I ended up installing Git Desktop. Never looked
                                        back since, I can study from anywhere! </p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====------->

                        <!------===== expertise item start =====-------> */}
                        <div className="expertise-item padd-15">
                            <a href="https://youtu.be/dQw4w9WgXcQ/" target="_blank" rel="noopener noreferrer">

                                <div className="expertise-item-inner">
                                    <div className="icon">
                                        <i className="fa-solid fa-brands fa-list-ul"></i>
                                    </div>
                                    <h4>ET CETERA</h4>
                                    <p>I've touched base with various subjects during my studies. Here are a few
                                        examples: Express.js, Body-parser, Encryption, Authentication, SQL, NoSQL,
                                        MongoDB and APIs. I'm very keen to expand this list!</p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== expertise item end =====-------> */}
                    </div>
                    {/* <!------===== expertise item end =====-------> */}
                </div>
        </section>
    </div>
  )
}

export default Expertise;
