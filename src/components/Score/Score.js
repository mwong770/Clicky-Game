import React from "react";
import "./Score.css";

const Score = props => (
    <div className="container">
        <div id="score-row" className="row">
            <div id="message" className="col s12 l4 offset-l4">
                <span>{props.message}</span>
            </div>
            <div id="score" className="col s12 l4">
                <span> Score: <span>{props.score}</span> | </span>
                <span> Top Score: <span>{props.topScore}</span></span>
            </div>
        </div>
    </div>
);

export default Score;