import React, { useState, useEffect } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

import './TimelineChart.css';
import {Alert} from "react-bootstrap";

const TimelineChart = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Retrieve history from local storage
        const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
        setHistory(storedHistory);
    }, []);

    return (
        <div className="count-chart">
            <h1>
                <i className="bi bi-graph-up"> </i>
                Γράφημα Μετρήσεων
            </h1>
            {history.length > 0 ? (
                <ResponsiveContainer width="70%" height={500}>
                <LineChart
                    width={400}
                    height={300}
                    data={history}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    style={{
                        backgroundColor: "#f8f9fa",
                        padding: "1em 0em",
                        borderRadius: "10px"
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"  />
                    <YAxis  />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="breathsCount" stroke="#01233e" strokeWidth={2} />
                </LineChart>
                </ResponsiveContainer>
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
        </div>
    );
};

export default TimelineChart;
