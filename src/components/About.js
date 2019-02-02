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
            <div className='textbox-title' >
                <p>About</p>
            <div/>
            <br /><br /><br />
            <div className='container' >
                <div className='aside-1'></div>
                <div className='textbox-main'>I am a junior Full Stack Web Developer and UI/UX Javascript specialist. Check out my latest projects on the web portfolio page and feel free to take a look at my GitHub repositories to follow up the codes.</div>
                <div className='aside-2'></div>
            </div>
            <br /><br /><br /><br /><br />
           <div className='textbox-sub'>Click on the element of your interest below to x-ray its link to this website.</div>
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

function Stack(props) {
    return (
        <div className='item'>
            <img src={props.logo} alt={`${props.name} logo`} />
            <div className='overlay'>
                <h3>{props.name}</h3>
            </div>
        </div>

    )
}

export default About;