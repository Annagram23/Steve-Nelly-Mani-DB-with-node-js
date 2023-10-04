import pg from "pg";
// create a variable with process.env.DB_URL connection string
const connectionString = process.env.DB_URL;
// create a new pg pool instance const pool = new pg.Pool(//pass in connection details//
const pool = new pg.Pool({connectionString});
// create a query to create a new table
const res = await pool.query(
    `CREATE TABLE authors_2 
        (id INT PRIMARY KEY,
            first_name VARCHAR(100),
            last_name VARCHAR(100))`);
    
console.log(res);
// end the connection
await pool.end();