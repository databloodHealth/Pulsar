import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const port = Number(process.env.DB_PORT || 3306);

const connectionString = `=mysql://${user}:${password}@${host}:${port}/${database}` ;

export default defineConfig({
    dialect: "mysql",

    schema: "./src/db/schema.js",

    out: "./drizzle",

    dbCredentials: {
        url: connectionString
    }
});