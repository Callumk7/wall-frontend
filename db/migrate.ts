import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = "postgresql://postgres:VHnYMVjW8mnno6nT5Y8K@containers-us-west-133.railway.app:6558/railway"
console.log(connectionString);
 
const sql = postgres(connectionString)
const db = drizzle(sql);
 
await migrate(db, { migrationsFolder: "drizzle" });
