import express from "express";
import cors from "cors";
import db from "./db.js";
import bodyParser from "body-parser";


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));//req.body

//Routes

//create todo
app.post('/todos',async(req,res)=>{
    try {
        const item=req.body.item;
        const newTodo = await db.query(
            "INSERT INTO todo(item) values ($1) returning *",
            [item]
        );
        res.json(newTodo.rows[0]);

    } catch (error) {
        console.log(error.message);
    }
})

//get all todo
app.get("/todos",async(req,res)=>{
    try {
        const allTodo = await db.query(
            "select * from todo"
        );
        res.json(allTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//get a todo
app.get("/todos/:id",async(req,res)=>{
    try {
        const getTodo = await db.query(
            "select * from todo where todo_id=$1",
            [req.params.id]
        );
        res.json(getTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//update a todo
app.put("/todos/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const item = req.body.item;
        const updateTodo= await db.query(
            "update todo set item = $1 where todo_id = $2",
            [item,id]
        );

        res.json("Todo Updated");
    } catch (error) {
        console.log(error.message);
    }
})

//delete a todo
app.delete("/todos/:id",async(req,res)=>{
    const id  =req.params.id;
    const deleteTodo = await db.query(
        "delete from todo where todo_id =$1 ",
        [id]
    );
    res.json("Todo was deleted succesfully!");
})

app.listen(port,()=>{
    console.log(`Server has started on port ${port}`);
})