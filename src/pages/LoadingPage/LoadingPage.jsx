import React from "react";
import logo from "../../assets/svg/logo.svg";

import "./LoadingPage.css";

const LoadingPage = () => {

    return (
        <>
            <div className="loading-page">

                <div className='loading-content'>
                    <img
                        src={logo}
                        className='loading-page-icon pulsate'
                        alt="Loading..."
                    />
                    <h3>
                        Εκκίνηση Εφαρμογής
                    </h3>
                    <p>
                        <i>Οι γάτες κοιμούνται περίπου το 70% της ζωής τους.</i>
                    </p>
                </div>
            </div>
        </>)
};

export default LoadingPage;