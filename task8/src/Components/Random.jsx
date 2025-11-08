import { Component } from "react";

export class Random extends Component {
    state = { number: 0 };

    generateRandom = () => {
        const randomValue = Math.floor(Math.random() * 100); 
        this.setState({ number: randomValue });
    };

    render() {
        return (
            <div>
                <h2>Random Number: {this.state.number}</h2>
                <button onClick={this.generateRandom}>Generate</button>
            </div>
        );
    }
}

