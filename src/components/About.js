import React from 'react';
import './About.css';
import css from './Images/css.png';
import heroku from './Images/heroku.jpeg';
import html5 from './Images/html5.png';
import javascript from './Images/javascript.png';
import reactJS from './Images/reactJS.png';
import mongo from './Images/mongoDB.png';
import nodeJS from './Images/nodeJS.png';

const About = () => {
    return (
        <div>
            <p><h2>About</h2></p>
                <div>
                    <br /><br /><br />
                    <div className='container' >
                        <div className='aside-1'></div>
                        <div className='textbox'>I am a junior Full Stack Web Developer and UI/UX Javascript specialist. Check out my latest projects on the web portfolio page and feel free to take a look at my GitHub repositories to follow up the codes.</div>
                        <div className='aside-2'></div>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                        <div className='textbox'>Click on the element of your interest below to x-ray its link to this website.</div>
                    <br /><br /><br />
                    <div className='container' >
                        <div className='item'>
                            <img src={javascript} alt='JavaScript logo' />
                            <div className='overlay'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={reactJS} alt='reactJS logo' />
                            <div className='overlay'>
                                <h3>ReactJS</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={css} alt='css logo' />
                            <div className='overlay'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={html5} alt='html5 logo' />
                            <div className='overlay'>
                                <h3>html5</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={nodeJS} alt='nodeJS logo' />
                            <div className='overlay'>
                                <h3>nodeJS</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={mongo} alt='mongo logo' />
                            <div className='overlay'>
                                <h3>mongoDB</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={heroku} alt='heroku logo' />
                            <div className='overlay'>
                                <h3>heroku</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;
