import type { Config } from "drizzle-kit";

export default {
	schema: "./db/schema/*",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString:
			"postgresql://postgres:cUQWGBBhcGFf3OZm@db.oobwmbonoswxwgaccvci.supabase.co:5432/postgres",
	},
} satisfies Config;
