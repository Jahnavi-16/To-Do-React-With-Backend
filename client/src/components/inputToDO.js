import React,{Fragment,useState} from "react";
import axios from "axios";

function InputTodo()
{
    const [item,setItem]=useState("");

    async function onSubmitForm(e) {
        e.preventDefault();
        try {
            const body = {item: item};
            const response = await axios.post("http://localhost:5000/todos",body, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            console.log(response.status);
            window.location="/";
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return(
        <Fragment>
        <h1 className="text-center mt-5">Todo List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" style={{backgroundColor:"#eeeee4"}} name="item" value={item} onChange={e=>setItem(e.target.value)}/>
            <button className="btn ml-2" style={{backgroundColor:"#eeeee4"}}>Add</button>
        </form>
        </Fragment>
    )
}

export default InputTodo;