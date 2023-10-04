import pg from "pg";

const connectionString = process.env.DB_URL;

const pool = new pg.Pool({ connectionString });

const res = await pool.query(
	`INSERT INTO authors (id, first_name, last_name) VALUES (7, 'Cormac', 'McCarthy')`
);

console.log(res);

await pool.end();
