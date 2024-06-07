import React,{Fragment} from "react";
import './App.css';

//components
import InputTodo from "./components/inputToDO";
import ListToDo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTodo />
      <ListToDo />
      </div>
    </Fragment>
  );
}

export default App;
