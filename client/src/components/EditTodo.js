import React,{Fragment,useState} from "react";
import axios from "axios";

function EditTodo({todo}) {
    const [item,setItem]=useState(todo.item);
    
    //edit item function
    async function updateItem(e,id) {
        try {
            e.preventDefault();
            
            const body = {item: item};
            const response = await axios.put(`http://localhost:5000/todos/${id}`,body, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            console.log(response.statusText);
            window.location="/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
                Edit
            </button>
        
        <div className="modal" id={`id${todo.todo_id}`} onClick={()=>setItem(todo.item)}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Edit Todo</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>setItem(todo.item)}></button>
            </div>
            <div className="modal-body">
                <input type="text" className="form-control" value={item} onChange={e=>setItem(e.target.value)}></input>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e=>updateItem(e,todo.todo_id)}>Edit</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>setItem(todo.item)}>Close</button>
            </div>

            </div>
        </div>
        </div>
        </Fragment>
    );
}

export default EditTodo;