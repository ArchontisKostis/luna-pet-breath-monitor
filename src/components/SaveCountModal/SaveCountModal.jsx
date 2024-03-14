import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import BreathCounter from "../../utils/BreathCounter.js";
import useLocalStorage from "../../hooks/useLocalStorage.js";

const SaveCountModal = ({ show, handleClose, finalCount, today, countdown }) => {
    let [existingHistory, setExistingHistory] = useLocalStorage('history', []);

    const handleSave = () => {
        let id = existingHistory.length + 1;

        let breathCounter = new BreathCounter(finalCount, countdown);
        let breathsPerMinute = breathCounter.calculateBreathsPerMinute();

        // Construct the data object
        const data = {
            id: id,
            date: today.toLocaleDateString(),
            breathsCount: breathsPerMinute,
            countdownTime: countdown,
            notes: document.getElementById('notes').value, // Retrieve notes from the textarea
        };

        // Add the new data to the history
        existingHistory.push(data);

        // Save the updated history back to local storage
        setExistingHistory(existingHistory);
        localStorage.setItem('history', JSON.stringify(existingHistory));

        // Close the modal
        handleClose();
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Τέλος Χρονομέτρησης</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Η χρονομέτρηση τελείωσε. <br/>
                Αριθμός αναπνοών κατοικίδιου: <b>{finalCount}</b> <i>ανά {countdown} δευτερόλεπτα.</i> <br/>
                Ημερομηνία: <b>{today.toLocaleDateString()}</b> <br/> <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Σημειώσεις:</Form.Label>
                        <Form.Control as="textarea" rows={3} id="notes"/>
                    </Form.Group>
                </Form>

                <br/> <br/>
                <i className="new-count-modal-info">
                    Επιλέξτε "Αποθήκευση" για να αποθηκεύσετε την μέτρηση ή "Ακύρωση" για να την ακυρώσετε.
                </i>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Ακύρωση
                </Button>
                <Button variant="success" onClick={handleSave}>
                    Αποθήκευση
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SaveCountModal;
