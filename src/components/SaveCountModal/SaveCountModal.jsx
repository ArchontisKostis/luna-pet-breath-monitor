import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SaveCountModal = ({ show, handleClose, finalCount, today, countdown }) => {
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
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>

                <br/> <br/>
                <i className="new-count-modal-info">
                    Επιλέξτε "Αποθήκευση" για να αποθηκεύσετε την μέτρηση ή "Ακύρωση" για να την ακυρώσετε.
                </i>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Ακύρωση
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Αποθήκευση
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SaveCountModal;
