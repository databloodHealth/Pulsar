import "dotenv/config";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "../db/schema.js";
import * as relations from "../db/relations.js";

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 3306)
});
console.log( connection ) ;

const db = drizzle({
  client: connection,
  schema: { ...schema, ...relations }
});

export default db;