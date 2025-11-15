import { Component } from "react";
export class UserInput extends Component{
    constructor(){
    super();
    this.state={username:""}
    }

    user=(event)=>{
        this.setState({username:event.target.value})
    }
    
    
    
    

    render(){
        return(
            <div>
            <input id="name" type="text" placeholder="enter your name" onChange={this.user} />
            <p>{this.state.username}</p>
            </div>
        

        )
    }
}