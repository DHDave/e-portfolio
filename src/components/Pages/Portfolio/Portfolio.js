
import css from '../../Images/css_3-8d8d9c.svg';
import heroku from '../../Images/heroku-8D8D9C.svg';
import html5 from '../../Images/html5_2-8d8d9c-A4A4B6.svg';
import javascript from '../../Images/javascript-4-8d8d9c.svg';
import reactJS from '../../Images/reactJS.png';
// import mongo from '../../Images/mongoDB.png';
import nodeJS from '../../Images/nodejs_2-8D8D9C.svg';
import Stack from './Stack';
// import Dissertation from '../../Images/nodeJS.png'
import ProjectManFlix from '../../Images/ManFlix.png'
import ProjectKoinalysis from '../../Images/Koinalysis.png'

import React from 'react';
import { Link } from 'react-router-dom';
import "../../BurgerMenu/styles.css";
import gitHub from '../../Images/github-8d8d9c.svg';
import Contact from '../../Images/contact2-8d8d9c.svg'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='container' >
            <div className='container1' >
                <div className='textbox-title' >
                    <p>Portfolio</p>
                </div>
                <div className='multiCont'>
                    <div className='menu-item2'>
                    <a>
                            <Link to="/Contact"><img src={Contact} alt = 'Contact' ></img></Link>
                        </a>
                    </div>
                </div>
                <br /><br />
                <div className='textbox-main1' >
                    <p >Below there are two deployed projects that are currently being developed. <span style={{color: '#FFFFFF'}}>Kodflix </span>will be a video streaming application, similar to Netflix and <span style={{color: '#FFFFFF'}}>Koinalisys</span>, is a web application that provides real time and historic cryptocurrency price information. </p> 
                    <br />
                <div class="smallLine">
                    <p>The apps are deoployed in a limited sandbox container, so please allow 3 minutes for the development server to power up.</p></div>
                </div>
                    <div className='container' >
                        <l>
                            <a
                                href='https://kodflix-dave.herokuapp.com/'                                        target="_blank"
                                rel="noreferrer noopener">
                                < Stack name='Kodflix - Own Project' logo={ProjectManFlix} />
                            </a>
                            <br></br>
                            <div className='textbox-main2' >
                                <p className='img2'>
                                    <div className='menu-item2'>
                                        <a
                                            href='https://github.com/DHDave/kodflix' target="_blank"
                                            rel="noreferrer noopener">
                                            <img src={gitHub} alt = 'gitHubLogo' ></img>
                                        </a>{" "}
                                    </div>
                                </p>
                            </div>
                            <br /><br />
                            <a
                            href='https://koinalysis.herokuapp.com/'                                        target="_blank"
                                rel="noreferrer noopener">
                                < Stack name='Koinalysis - Team Project' logo={ProjectKoinalysis} />
                            </a>
                                    {/* < Stack name='Dissertation' logo={Dissertation} /> */}
                            <br></br>
                            <div className='textbox-main2' >
                                <p className='img2'>
                                    <div className='menu-item2'>
                                        <a
                                            href='https://github.com/kodiri/koinalysis/commits/master' target="_blank"
                                            rel="noreferrer noopener">
                                            <img src={gitHub} alt = 'gitHubLogo' ></img>
                                        </a>{" "}
                                    </div>
                                </p>
                            </div>
                        </l>
                    </div>
                    <div className='textbox-main1' >
                        <div class="smallLine">
                            <p >The Tech Stack</p>
                        </div>
                            <p>
                                <div className='img1' >
                                    <img src={reactJS} alt = 'reactJS' ></img><br /><br />
                                </div>
                                <div className='img1' >
                                    <img src={javascript} alt = 'gitHubLogo' ></img><br /><br />
                                </div>
                                <div className='img1' >
                                        <img src={nodeJS} alt = 'nodeJS' ></img><br /><br />
                                </div>
                            </p>
                            <p>
                                <div className='img1' >
                                    <img src={css} alt = 'css' ></img><br /><br />
                                </div> 
                                <div className='img1' >
                                    <img src={html5} alt = 'html5' ></img><br /><br />
                                </div>
                                <div className='img1' >
                                    <img src={heroku} alt = 'heroku' ></img><br /><br />
                                </div>
                            </p>
                    </div>
                    <br /><br />
                    <div class="copyrightLine">
                        <p>Copyright © 2019 Developed By David Hajos</p>          
                </div>
            </div>
        </div>
    );
};


export default Portfolio;