import React, { useState, useEffect } from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import TileButton from "../../components/TileButton/TileButton.jsx";

import './NewCountPage.css';

const COUNTDOWN_SECONDS = 10;

const NewCountPage = () => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(COUNTDOWN_SECONDS);
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
        if (startedCounting) {
            const intervalId = setInterval(() => {
                // Decrease timer by 1 every second
                setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));

                // Show alert when the countdown stops
                if (timer < 1) {
                    clearInterval(intervalId);

                    // Reset flags
                    setCount(0);
                    setTimer(COUNTDOWN_SECONDS);
                    setStartedCounting(false)

                    handleShow();
                }
            }, 1000);

            // Clear interval when component is unmounted
            return () => clearInterval(intervalId);
        }
    }, [startedCounting]); // Include count and timer in the dependency array

    return (
        <div className="new-count-page">
            <p className="timer">
                <i className="bi bi-clock"> </i>
                {timer}
            </p>
            <div className="breath-btn-container">
                <button className="heart-button" onClick={handleCountClick}>
                    <i className="bi bi-lungs-fill">
                        <p>{count}</p>
                    </i>
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Τέλος Χρονομέτρησης</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Η χρονομέτρηση τελείωσε. <br/>
                    Ο αριθμός των αναπνοών του κατοικίδιου είναι: <b>{count}</b>.
                    <br/> <br/>
                    <i>
                        Επιλέξτε "Αποθήκευση" για να αποθηκεύσετε την μέτρηση ή "Ακύρωση" για να την ακυρώσετε.
                    </i>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Ακύρωση
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Αποθήκευση
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default NewCountPage;
