import React from 'react';
import "../../BurgerMenu/styles.css";
import email from '../../Images/send-8d8d9c.svg';
import linkedIn from '../../Images/linked-in-logo-of-two-letters2-8d8d9c.svg';

const Contact = () => {
    return (
        <div className='container'>
            <div className='container1' >
                <div className='textbox-title' >
                    <p>Contact</p>
                </div>
                <div className='multiCont'>
                    <div className='menu-item2'>
                        <a
                            href='https://www.linkedin.com/in/david-hajos'                                        target="_blank"
                            rel="noreferrer noopener">
                            <img src={linkedIn} alt = 'LinkedInLogo' ></img>
                        </a>
                    </div>
                </div>
                <br /><br /><br /><br />
                <div className='textbox-main1' >
                    <p >If you believe I match the junior Full Stack Web Developer candidate profile you are looking for, please get in touch or connect via email or LinkedIn, by clicking on the relevant icon of this page.</p> <p >Best Regards,</p> <p >David Hajos</p>
                    <br />
                    <div className='textbox-main2' >
                        <p className='imgbox'>
                            <div className='menu-item2'>
                                <a
                                    href="mailto:david_itpm@outook.com"
                                    rel="noreferrer noopener"
                                    >
                                    <img src={email} alt = 'email' ></img>
                                </a>{" "}
                            </div>     
                        </p>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div class="copyrightLine">
                        <p>Copyright © 2019 Developed By David Hajos</p>          
                    </div>
                </div>
            </div>
        </div> 
    );
};


export default Contact;
