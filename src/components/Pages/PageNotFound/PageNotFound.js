import React from 'react';
import Leo_img from './Images/leopard.jpg';
import '../../BurgerMenu/styles.css';


const Error = () => {
    return (
        <div>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />  
            <div className='textbox-main' >
                <div className='img4'>
                    <img src={Leo_img} alt='Sleeping leopard' />
                </div>
                    <br /><br /><br />
                    <p> <h3>Psst...let her sleep. </h3><br /><br /><br /></p>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <br /><br /><br />
                    <br /><br /><br />
                <div class='copyrightLine'>
                    <p>Copyright © 2019 Developed By David Hajos</p>          
                </div>
            </div>
        </div>      
    );
};

export default Error;
