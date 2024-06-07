import React,{Fragment,useEffect,useState} from "react";
import axios from "axios";
import EditTodo from "./EditTodo";

function ListToDo(params) {
    const [todos,setTodos]=useState([]);
    async function getTodos(){
        try {
            const responce = await axios.get("http://localhost:5000/todos");
            setTodos(responce.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function deleteToDo(id) {
        try {
            const responce =await axios.delete(`http://localhost:5000/todos/${id}`);
            console.log(responce.statusText);
            setTodos(todos.filter(todo => todo.todo_id!=id));
        } catch (error) {
            console.log(error.message);
        }
        
    }
    

    useEffect(()=>{
        getTodos();
    },[])

    return (
        <Fragment>
            <h1 className="mt-5">List of Todos:</h1>
            <table className="table mt-5" style={{backgroundColor:"#eeeee4"}}>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(todo=>(
                    <tr key={todo.todo_id}>
                        <td>{todo.item}</td>
                        <td><EditTodo todo={todo}/></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteToDo(todo.todo_id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
        </table>
        </Fragment>
    );
}

export default ListToDo;