import React from 'react';
import { Link } from 'react-router-dom';
import "../../BurgerMenu/styles.css";
// import email from '../../Images/send-8d8d9c.svg';
// import gitHub from '../../Images/github-logo-grey.svg';
import linkedIn from '../../Images/linked-in-logo-of-two-letters2-8d8d9c.svg';
import Diploma from '../../Images/Grad-graduate-showing-his-diploma-8d8d9c.svg';
import Portfolio from '../../Images/man-in-office-desk-with-computer-8d8d9c.svg';
import Contact from '../../Images/contact2-8d8d9c.svg';
import './Courses.css'

const Courses = () => {
    return (
        <div className='container' >
            <div className='container1' >
                <div className='container2' >
                    <div className='textbox-title' >
                        <p>Courses</p>
                        <div className='multiCont'>
                            <div className='menu-item2'>
                                <a
                                    href='https://www.linkedin.com/in/david-hajos'                                        target="_blank"
                                    rel="noreferrer noopener">
                                    <img src={linkedIn} alt = 'LinkedInLogo' ></img>
                                </a>
                            </div>
                        </div>
 
                        <div className='textbox-main1' >
                            <div className='textbox-main2' >
                                <p className='imgbox'>
                                    <a>
                                        <img src={Diploma} alt = 'Diploma' ></img> 
                                    </a>{" "}
                                </p>
                                </div>
                                    <p>JavaScript React Bootcamp 2019<br></br><span style={{color: 'rgb(50, 115, 180)'}}>320 hours</span></p>
                                    <p>DevOps Certification 2019 <br></br><span style={{color: 'rgb(50, 115, 180)'}}>36 hours</span></p>
                                    <p>BSc Hons Business IT 2018<br></br><span style={{color: 'rgb(50, 115, 180)'}}>2300 hours</span></p>
                                    <p>Blockchain Certification 2018<br></br><span style={{color: 'rgb(50, 115, 180)'}}>36 hours</span></p>
                                    <p>Prince2 Practitioner 2017<br></br><span style={{color: 'rgb(50, 115, 180)'}}>50 hours</span></p>
                                    <br />
                                <div className='textbox-main2' >
                                    <p className='imgbox'>
                                        <div className='menu-item2'>
                                            <a>
                                                <Link to="/Portfolio"><img src={Portfolio} alt = 'Diploma' ></img></Link>
                                            </a>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;
                                        <div className='menu-item2'>
                                            <a>
                                                <Link to="/Contact"><img src={Contact} alt = 'Contact' ></img></Link>
                                            </a>
                                        </div>
                                    </p>
                                </div>
                                    <br /><br /><br /><br /><br />
                                    <div class="copyrightLine">
                                        <p>Copyright © 2019 Developed By David Hajos</p>          
                                    </div>
                                </div>
                            <div>
                        </div>
                    </div>  
                </div>
            </div>          
        </div>       
    );
};

export default Courses;
