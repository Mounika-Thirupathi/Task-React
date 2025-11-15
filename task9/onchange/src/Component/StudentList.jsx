import { Component } from "react";
export class StudentList extends Component{
    render(){
        return(
            <ol style={{listStyleType:"none"}}>
                {this.props.students.map((value,index)=>
                <li key={index}>{value.id},{value.name},{value.grade}</li>
                
                )}
            </ol>
        )
    }
}