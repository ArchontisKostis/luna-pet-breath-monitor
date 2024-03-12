import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import TileButton from "../../components/TileButton/TileButton.jsx";

import './NewCountPage.css';

const NewCountPage = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(60);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Decrease timer by 1 every second
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));

            // Show alert when the countdown stops
            if (timer === 0) {
                clearInterval(intervalId);
                alert(`Countdown stopped! Final count: ${count}`);
            }
        }, 1000);

        // Clear interval when component is unmounted
        return () => clearInterval(intervalId);
    }, [count, timer]); // Include count and timer in the dependency array

    return (
        <div className="new-count-page">
            <p className="timer">
                <i className="bi bi-clock"> </i>
                {timer}
            </p>
            <div className="breath-btn-container">
                <button className="heart-button" onClick={handleClick}>
                    <i className="bi bi-lungs-fill">
                        <p>{count}</p>
                    </i>
                </button>
            </div>
        </div>
    );
};

export default NewCountPage;
