import React, {useEffect, useState} from 'react';

import './CountHistoryCard.css';
import {Button, Card, Modal} from "react-bootstrap";
import useLocalStorage from "../../hooks/useLocalStorage.js";
const CountHistoryCard = ({index, item}) => {
    const [history, setHistory] = useLocalStorage('history', [])
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

            // Refresh the page
            window.location.reload();
        }
    };

    return (
        <>
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
                    Αναπνοές: {item.breathsCount}
                </Card.Subtitle>
                <Card.Text>
                    <i className="bi bi-hourglass-split"> </i>
                    Χρόνος Μέτρησης: {item.countdownTime} " <br/>
                    <br />
                    <i className="bi bi-journal-text"> </i>
                    Σημειώσεις: <br/>

                    <i>{item.notes || 'No notes available'}</i>
                </Card.Text>
            </Card.Body>
        </Card>

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
    </>
    );
};


export default CountHistoryCard;