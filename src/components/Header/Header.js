import React from "react";
import "./Header.css";
import Instructions from "../Instructions";
import Score from "../Score";

const Header = props => (
    <header className="row">
        <div id="headerCard" className="col s12">
            <div className="card">
                <div className="card-image">
                    <img alt="pokemon characters" src="./assets/images/pokemon-header.jpg" />
                </div>
                <div className="card-content yellow lighten-3">
                    <Instructions />
                    <Score
                        score={props.score}
                        topScore={props.topScore}
                        message={props.message}
                    />
                </div>
            </div>
        </div>
    </header>
);

export default Header;