import pg from "pg";

const connectionString = process.env.DB_URL;

const pool =  new pg.Pool({connectionString});

const res = await pool.query(`DROP TABLE authors_2`);

console.log(res);

await pool.end();