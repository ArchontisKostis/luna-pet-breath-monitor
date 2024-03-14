import React, { useState, useEffect } from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import TileButton from "../../components/TileButton/TileButton.jsx";

import './NewCountPage.css';
import SaveCountModal from "../../components/SaveCountModal/SaveCountModal.jsx";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer.jsx";
import BreathButton from "../../components/BreathButton/BreathButton.jsx";

const COUNTDOWN_SECONDS = 30;

const NewCountPage = () => {
    const [count, setCount] = useState(0);
    const [finalCount, setFinalCount] = useState(0);

    const [timer, setTimer] = useState(COUNTDOWN_SECONDS);
    const [finalTimer, setFinalTimer] = useState(COUNTDOWN_SECONDS);

    const [today, setToday] = useState(new Date());
    const [startedCounting, setStartedCounting] = useState(false);

    const handleCountClick = () => {
        setCount(count + 1);
        setStartedCounting(true);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        // Get the current date and time
        const now = new Date();
        setToday(now);

        console.log("Ημερομηνία: " + now);
        console.log("Αριθμός αναπνοών: " + count);

        // Reset the counter and timer
        setCount(0);
        setTimer(COUNTDOWN_SECONDS);

        // Close the modal
        handleClose();
    }

    useEffect(() => {
        let intervalId;

        if (startedCounting) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));

                if (timer < 1) {
                    // Reset flags
                    setTimer(COUNTDOWN_SECONDS);
                    setStartedCounting(false);

                    setFinalCount(count);
                    setCount(0);

                    handleShow();
                }
            }, 1000);
        }

        // Clear interval when component is unmounted or when counting is stopped
        return () => clearInterval(intervalId);
    }, [startedCounting, timer]);

    let handleIncrement = () => {
        let increment = timer + 1;

        setTimer(increment);
        setFinalTimer(increment);
    }

    let handleDecrement = () => {
        let decrement = timer - 1;

        setTimer(decrement);
        setFinalTimer(decrement);
    }

    return (
        <div className="new-count-page">
            <CountdownTimer timer={timer} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
            <BreathButton count={count} onClick={handleCountClick} />

            <a href="/history" className="go-to-history">
                <i className="bi bi-arrow-right-circle"></i>
                Ιστορικό Μετρήσεων
            </a>

            <SaveCountModal
                show={show}
                handleClose={handleClose}
                finalCount={finalCount}
                today={today}
                handleSave={handleSave}
                countdown={finalTimer}
            />
        </div>
    );
};

export default NewCountPage;
