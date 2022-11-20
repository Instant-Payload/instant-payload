const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();



const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = {
  query: (text, params, callback) => {
    console.log(process.env.PGUSER)
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};