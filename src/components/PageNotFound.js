import React from 'react';
import Leo_img from './Images/leopard.jpg';

const Error = () => {
    return (
        <div>
            <br />
             <img src={Leo_img} alt='Sleeping leopard' /> 
            <p><h2>Ooops, the page you are looking for does not exist &nbsp; :( </h2></p>
        </div>
    );
};

export default Error;
