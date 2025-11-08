import { Component } from "react"
export class Counter extends Component{
    state={count:0}
    increment=()=>{
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
    }
    decrement=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
    }
    render(){
    return(
        <div>
            <h2>count:{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        </div>

    )
}
}