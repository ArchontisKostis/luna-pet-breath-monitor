import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './TimelineChart.css';

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
                <LineChart
                    width={600}
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
            ) : (
                <p>No count history available.</p>
            )}
        </div>
    );
};

export default TimelineChart;
