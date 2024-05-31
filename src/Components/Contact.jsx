import React from 'react'
import '../css/styles.css'  
import '../css/skins/color-1.css'
import '../css/skins/color-2.css'
import '../css/skins/color-3.css'
// import '../css/skins/color-4.css'
// import '../css/skins/color-5.css'
import '../css/style-switcher.css'

const Contact = () => {
  return (
    <div>
        <section className="contact section s-link" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact</h2>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">Have you have any questions?</h3>
                    <h4 className="contact-sub-title padd-15">Please feel free to contact me!</h4>
                    <div className="row">
                        {/* <!------===== contact info item start =====-------> */}
                        <div className="contact-info-item padd-15">
                            <a href="tel:91+9392304794">
                                <div className="contact-info-item-inner">
                                    <div className="icon"><i className="fa fa-phone"></i></div>
                                    <h4>Call me on:</h4>
                                    <p>+91 9392304794</p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== contact info item end =====------->

                        <!------===== contact info item start =====-------> */}
                        <div className="contact-info-item padd-15">
                            <a href="mailto:durgearyan9@gmail.com">
                                <div className="contact-info-item-inner">
                                    <div className="icon"><i className="fa fa-envelope"></i></div>
                                    <h4>Email</h4>
                                    <p>durgearyan9@gmail.com</p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== contact info item end =====-------> */}

                        {/* <!------===== contact info item start =====-------> */}
                        <div className="contact-info-item padd-15">
                            <a href="https://www.linkedin.com/in/aryan-durge-14893824b/" target="_blank" rel="noopener noreferrer">
                                <div className="contact-info-item-inner">
                                    <div className="icon"><i className="fa fa-brands fa-linkedin-in"></i></div>
                                    <h4>LinkedIn</h4>
                                    <p>in/Aryan</p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== contact info item end =====------->

                        <!------===== contact info item start =====-------> */}
                        <div className="contact-info-item padd-15">
                            <a href="https://github.com/AryanDurge" target="_blank">

                                <div className="contact-info-item-inner">
                                    <div className="icon"><i className="fa fa-brands fa-github"></i></div>
                                    <h4>Github</h4>
                                    <p>github.com/AryanDurge</p>
                                </div>
                            </a>
                        </div>
                        {/* <!------===== contact info item end =====-------> */}
                    </div>
                    <h3 className="contact-title padd-15">Send me and email!</h3>
                    <h4 className="contact-sub-title padd-15">I will get back to you as soon as possible.</h4>
                    {/* <!------===== contact form start =====-------> */}
                    <div className="row">
                        <div className="contact-form padd-15">
                            <form target="_blank" action="https://formsubmit.co/durgearyan9@gmail.com" method="POST"
                                id="formSubmitCo">
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Full Name"
                                                required/>
                                            <input type="hidden" name="_autoresponse"
                                                value="Thank you for your message. I'll get back to you shortly! Kindly, Andras"/>
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control"
                                                placeholder="Email Address" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <input type="text" name="_subject" className="form-control"
                                                placeholder="Subject"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <textarea placeholder="Your Message" className="form-control" name="message"
                                                rows="10" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <button type="submit" className="btn form-submit-btn">Submit Form</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!------===== contact form end =====-------> */}
                </div>
            </section>
    </div>
  )
}

export default Contact;
