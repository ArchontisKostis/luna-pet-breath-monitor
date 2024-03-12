import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import './HistoryPage.css';

const CountHistoryPage = () => {
    const [history, setHistory] = useState([]);

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
                                <Card.Title><b>
                                    {item.date}
                                </b></Card.Title>
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
                <p>No count history available.</p>
            )}
        </div>
    );
};

export default CountHistoryPage;
