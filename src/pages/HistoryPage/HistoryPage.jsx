import React, { useState, useEffect } from 'react';
import {Alert, Button, Card, Modal} from 'react-bootstrap';

import './HistoryPage.css';
import TimelineChart from "../../components/TimelineChart/TimelineChart.jsx";
import CountHistoryCard from "../../components/CountHistoryCard/CountHistoryCard.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.js";

const CountHistoryPage = () => {
    const [history, setHistory] = useLocalStorage('history', []);

    return (
        <div className="count-history-page">
            <h1 className="history-header">
                <i className="bi bi-clock-history"> </i>
                Ιστορικό Μετρήσεων
            </h1>
            {history.length > 0 ? (
                <div className="cards-container">
                    {history.map((item, index) => (
                        <CountHistoryCard
                            index={index}
                            item={item}
                        />
                    ))}

                    <Button variant="success" onClick={() => window.location.href = "/new"}>
                        <i className="bi bi-plus-lg"> </i>
                        Νέα Μέτρηση
                    </Button>
                </div>
            ) : (
                <Alert variant="warning">
                    <Alert.Heading>
                        Δέν υπάρχουν μετρήσεις
                    </Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Προσθέστε μια νέα μέτρηση για να δείτε το Ιστορικό.
                    </p>
                </Alert>
            )}

            <TimelineChart history={history}/>
        </div>
    );
};

export default CountHistoryPage;
