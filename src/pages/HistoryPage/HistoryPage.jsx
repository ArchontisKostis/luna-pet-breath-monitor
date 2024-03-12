import React, { useState, useEffect } from 'react';
import {Alert, Button, Card, Modal} from 'react-bootstrap';

import './HistoryPage.css';
import TimelineChart from "../../components/TimelineChart/TimelineChart.jsx";

const CountHistoryPage = () => {
    const [history, setHistory] = useState([]);
    const [selectedEntryIndex, setSelectedEntryIndex] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setShow(true);
        setSelectedEntryIndex(index);
    }

    const handleDelete = () => {
        if (selectedEntryIndex !== null) {
            const updatedHistory = [...history];
            updatedHistory.splice(selectedEntryIndex, 1);
            setHistory(updatedHistory);

            // Save updated history to local storage
            localStorage.setItem('history', JSON.stringify(updatedHistory));

            // Close the modal
            handleClose();
        }
    };

    useEffect(() => {
        // Retrieve history from local storage
        const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
        setHistory(storedHistory);
    }, []);

    return (
        <div className="count-history-page">
            <h1 className="history-header">
                <i className="bi bi-clock-history"> </i>
                Ιστορικό Μετρήσεων
            </h1>
            {history.length > 0 ? (
                <div className="cards-container">
                    {history.map((item, index) => (
                        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                            <Card.Body>
                                <Card.Title className="history-card-header">
                                    <b>{item.date}</b>

                                    <Button variant="danger" className="delete-history-btn" onClick={handleShow}>
                                        <i className="bi bi-trash"> </i>
                                    </Button>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <i className="bi bi-lungs"> </i>
                                    Breaths Count: {item.breathsCount}
                                </Card.Subtitle>
                                <Card.Text>
                                    <i className="bi bi-hourglass-split"> </i>
                                    Χρόνος Μέτρησης: {item.countdownTime} " <br/>
                                    <br />
                                    <i className="bi bi-journal-text"> </i>
                                    Notes: <br/>

                                    <i>{item.notes || 'No notes available'}</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            ) : (
                <Alert variant="warning">
                    <Alert.Heading>
                        Δέν υπάρχουν μετρήσεις
                    </Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Προσθέστε μια νέα μέτρηση για να δείτε το γράφημα.
                    </p>
                </Alert>
            )}

            <TimelineChart
                history={history}
            />

            {/*  Delete Modal  */}
            <Modal show={show} onHide={handleClose} className="delete-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Διαγραφή Εγγραφής</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Προσοχή!</b> <br/>
                    Είστε σίγουρος ότι θέλετε να διαγράψετε την εγγραφή; Αυτή η ενέργεια δεν μπορεί να αναιρεθεί.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Άκυρο
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Διαγραφή
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CountHistoryPage;
