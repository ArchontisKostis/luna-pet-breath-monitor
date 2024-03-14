// BreathButton.jsx
import "./BreathButton.css"

const BreathButton = ({ count, onClick }) => {
    return (
        <div className="breath-btn-container">
            <button className="heart-button" onClick={onClick}>
                <i className="bi bi-lungs-fill">
                    <p>{count}</p>
                </i>
            </button>
        </div>
    );
};

export default BreathButton;
