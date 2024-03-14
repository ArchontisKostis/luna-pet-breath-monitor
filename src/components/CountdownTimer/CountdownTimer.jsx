import "./CountdownTimer.css"
import React from "react";

const CountdownTimer = ({timer, handleIncrement, handleDecrement}) => {

    return (
        <p className="timer">
            <i className="bi bi-clock"> </i>
            <p>
                {timer}"
            </p>
            <div className="timer-btns">
                <button className="time-btn" id="increment-timer" onClick={handleIncrement}>
                    <i className="bi bi-caret-up-fill"> </i>
                </button>

                <button className="time-btn" id="decrease-timer" onClick={handleDecrement}>
                    <i className="bi bi-caret-down-fill"> </i>
                </button>
            </div>
        </p>
    );
}

export default CountdownTimer;