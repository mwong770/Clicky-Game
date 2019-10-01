import React, { Component } from "react";
import Header from "../Header";
import Card from "../PokemonCard";
import data from "../../data.json";

class Game extends Component {

    state = {
        data,
        score: 0,
        topScore: 0,
        message: null
    };

    componentDidMount() {
        this.setState({ data: this.shuffleCards(this.state.data) });
    }

    handleClick = id => {
        if (this.state.message) {
            this.setState({
                message: null
            });
        }
        let guessedCorrectly = false;
        // loop through data
        let updatedData = this.state.data.map(item => {
            // find card by id
            if (item.id === id) {
                // if hasn't been clicked already
                if (!item.clicked) {
                    // mark clicked
                    item.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return item;
        });
        guessedCorrectly ? this.handleCorrectGuess(updatedData) : this.resetGame();
    }

    handleCorrectGuess = updatedData => {
        let updatedScore = this.state.score + 1;
        let updatedTopScore = Math.max(updatedScore, this.state.topScore);
        if (updatedScore === 12) {
            this.setState({
                message: "You Win!",
                topScore: 12
            });
            this.resetGame();
        } else {
            this.setState({
                data: this.shuffleCards(updatedData),
                score: updatedScore,
                topScore: updatedTopScore
            });
        }
    };

    resetGame = () => {
        let unclickedData = data.map(item => {
            item.clicked = false;
            return item;
        });
        this.setState({
            data: this.shuffleCards(unclickedData),
            score: 0
        });
    };

    shuffleCards = data => {
        data.forEach((element, index) => {
            let randIdx = parseInt(Math.random() * data.length);
            let temp = data[index];
            data[index] = data[randIdx];
            data[randIdx] = temp;
        });
        return data;
    };

    render() {
        console.log("state", this.state.data);
        return (
            <div>
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                    message={this.state.message}
                />
                <main>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.data.map((character) => (
                                    <Card
                                        key={character.id}
                                        id={character.id}
                                        handleClick={this.handleClick}
                                        color={character.color}
                                        image={character.image}
                                        // shake when score 0 (aka reset score b/c clicked img twice) but not when start game
                                        shake={!this.state.score && this.state.topScore}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Game;
