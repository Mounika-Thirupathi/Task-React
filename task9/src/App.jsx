import { Component } from "react";
import { FruitList } from "./Component/FruitList";
import { StudentList } from "./Component/StudentList";
import { UserInput } from "./Component/UserInput";
import ProductList from "./Component/ProductList";

const fruits=["Apple", "Banana", "Mango", "Orange"];

const students = [
  { id: 1, name: "John", grade: "A" },
  { id: 2, name: "Emma", grade: "B" },
  { id: 3, name: "Liam", grade: "C" }
];


export class App extends Component{
  render(){
    return(
      <>
      <h1>Hello</h1>
      <FruitList fruits={fruits} />
      <StudentList students={students}/>
      <UserInput/>
      <ProductList />
    
      </>
      
    )
  }
}