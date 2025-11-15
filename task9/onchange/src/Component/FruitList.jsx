import { Component } from "react";

export class FruitList extends Component{
    render(){
        return(
            <ol style={{listStyleType:"none"}}>
                {this.props.fruits.map((value,index)=>
                <li key={index}>{value}</li>
            )}

            
                
            </ol>
        )
    }
}
