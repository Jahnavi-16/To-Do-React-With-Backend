import pg from "pg";

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Keeper_App",
    password:"Jahnavi@16",
    port:5432,
  });
db.connect();

export default db;