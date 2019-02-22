import React from 'react';
import './About.css';
import css from './Images/css.png';
import heroku from './Images/heroku.jpeg';
import html5 from './Images/html5.png';
import javascript from './Images/javascript.png';
import reactJS from './Images/reactJS.png';
import mongo from './Images/mongoDB.png';
import nodeJS from './Images/nodeJS.png';
import Stack from './Stack';
import gitHub from './Images/github.svg';
import linkedIn from './Images/linkedIn1.svg';

const About = () => {
    return (
        <div>
            <div className='textbox-title' >
                <p>About</p>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
            <div/>
            <br />
            <div className='container' >
                <div className='aside-1'>
                <div className='logos'>        
                        <a href='https://github.com/DHDave'>
                            <  img src={gitHub} alt = 'GitLogo' ></img>
                        </a>
                        <a href='https://www.linkedin.com/in/david-hajos'>
                            <img src={linkedIn} alt = 'LinkedInLogo' ></img>
                        </a>
                    </div>
                </div>
                <div className='textbox-main'>I am a junior Full Stack Web Developer and UI/UX Javascript specialist. Check out my latest projects on the web portfolio page and feel free to take a look at my GitHub repositories to follow up the codes.</div>
                <div className='aside-2'></div>
            </div>
            <br />
            {/* <div className='logos'>
                <a href='https://github.com/DHDave'>
                    <  img src={gitHub} alt = 'GitLogo' ></img>
                </a>
                <a href='https://www.linkedin.com/in/david-hajos'>
                    <img src={linkedIn} alt = 'LinkedInLogo' ></img>
                </a>
            </div> */}
            <br />
            <div className='container' >
                < Stack name='JavaScript' logo={javascript} />
                < Stack name='ReactJS' logo={reactJS} />
                < Stack name='CSS' logo={css} />
                < Stack name='html5' logo={html5} />
                < Stack name='nodeJS' logo={nodeJS} />
                < Stack name='mongoDB' logo={mongo} />
                < Stack name='heroku' logo={heroku} />
            </div>    
        </div>
    </div>
    );
};



export default About;


