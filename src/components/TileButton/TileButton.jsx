import React from 'react';

import './TileButton.css';
const TileButton = ({icon, text, urlTo}) => {
    return (
        <a className="tile-button" href={urlTo}>
            <i className={icon}></i>
            <p>{text}</p>
        </a>
    );
};


export default TileButton;