import React from 'react';
import { Link } from 'react-router-dom';
import "../../BurgerMenu/styles.css";
import './About.css';
import linkedIn from '../../Images/linked-in-logo-of-two-letters2-8d8d9c.svg';
import Diploma from '../../Images/Grad-graduate-showing-his-diploma-8d8d9c.svg';
import Portfolio from '../../Images/man-in-office-desk-with-computer-8d8d9c.svg';

const About = () => {
    return (
        <div className='container' >
            <div className='container1' >
                <div className='textbox-title' >
                    <p>David Hajos</p>
                    <div className='textbox-main' >
                        <p>e-portfolio</p>
                        <div className='multiCont'>
                            <div className='menu-item2'>
                                <a
                                    href='https://www.linkedin.com/in/david-hajos'                                        target="_blank"
                                    rel="noreferrer noopener">
                                    <img src={linkedIn} alt = 'LinkedInLogo' ></img>
                                </a>
                            </div>
                        </div>
                        <br /><br />
                        <div className='textbox-main1' >
                            <p >I am a junior Full Stack Web Developer and UI/UX Javascript specialist. Check out my latest projects on the web portfolio page and feel free to take a look at my GitHub repositories to follow up the codes.</p>
                        </div>
                        <br />
                        <div className='textbox-main2' >    
                            <p className='imgbox'>
                                <div className='menu-item2'>
                                    <a>
                                        <Link to="/Courses"><img src={Diploma} alt = 'Diploma' ></img></Link> 
                                    </a>{" "}
                                &nbsp;&nbsp;&nbsp;
                                </div>
                                <div className='menu-item2'>
                                    <a>
                                        <Link to="/Portfolio"><img src={Portfolio} alt = 'Diploma' ></img></Link>
                                    </a>{" "}
                                </div>
                                
                            </p>
                        </div>
                        <br /><br />
                        <div class="copyrightLine">
                                <p>Copyright © 2019 Developed By David Hajos</p>          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default About;


