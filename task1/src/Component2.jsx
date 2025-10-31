//class component with default export
import { Component } from "react";
class Component1 extends Component{
    render(){
        return(
            <div>
                <p>Class Component with default export</p>
            </div>
        )
    }
}
export default Component1



//class component with named export
export class Components1 extends Component{
    render(){
        return(
            <div>
                <p>Class Component with named export</p>
            </div>
        )
    }
}