import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './GameHeader.css'


function GameHeader({text}){
    return (
        <>
            <h1 className="text-center pt-5 text-light display-2 customHeader">{text}</h1>
        </>
    );
}

export default GameHeader;