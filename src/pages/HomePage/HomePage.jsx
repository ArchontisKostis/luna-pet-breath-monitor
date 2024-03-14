// Home page React component
import React from 'react';

import './HomePage.css';

import {homepage} from '../../assets/data/main.json';
import TileButton from "../../components/TileButton/TileButton.jsx";

const HomePage = () => {
    return (
        <div className="home-page">
            <h2 className="actions-header">Ενέργειες</h2>
            <div className='buttons-grid'>
                <TileButton
                    icon={homepage.btnNew.icon}
                    text={homepage.btnNew.txt}
                    urlTo={homepage.btnNew.url}
                />
                <TileButton
                    icon={homepage.btnHistory.icon}
                    text={homepage.btnHistory.txt}
                    urlTo={homepage.btnHistory.url}
                />
            </div>
        </div>
    );
};


export default HomePage;