import { Component } from "react";
export class Change extends Component{
    state={text:"hi what u doing"}
    changing=()=>{
        this.setState({text:"im writing some react code"})
    }
    render(){
        return(
            <div>
            <h2>text:{this.state.text}</h2>
            <button onClick={this.changing}>submit</button>
            </div>
        )

    }
}