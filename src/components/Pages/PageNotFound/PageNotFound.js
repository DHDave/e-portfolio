import React from 'react';
import Leo_img from './Images/leopard.jpg';

const Error = () => {
    return (
        <div className='textbox-main'>
            <br />
             <img src={Leo_img} alt='Sleeping leopard' /> 
            <p>Psst...let her sleep. The page you are looking for does not exist  &nbsp;:)</p>
        </div>
    );
};

export default Error;
