// Import the pg from pg
import pg from "pg";

// create a variable with process.env.DB_URL connection string
const connectionString = process.env.DB_URL;
//create a new pg pool instance const pool = new pg.Pool(//pass in connection details//);
const pool = new pg.Pool({connectionString});
//connect to the database pg.pool and where connecting to in .env file
//send a query
const res = await pool.query("SELECT * FROM authors");

//log the result
console.log(res.rows);
//close the connection
await pool.end();