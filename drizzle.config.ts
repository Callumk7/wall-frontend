import type { Config } from "drizzle-kit";

export default {
	schema: "./db/schema/*",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: "postgresql://postgres:VHnYMVjW8mnno6nT5Y8K@containers-us-west-133.railway.app:6558/railway",
	},
} satisfies Config;
