import React from "react";
import "./PokemonCard.css";

const PokemonCard = props => (
    <div id="pokemonContainer" className="col s4 l3">
        <div id="pokemon-card" className={`card ${props.color} lighten-2 hoverable`}>
            <div className="card-image"
                onClick={() => props.handleClick(props.id)}>
                <img alt="pokemon character" src={`${props.image}`} />
            </div>
        </div>
    </div>
);

export default PokemonCard;
