import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { posts } from "./posts";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	fullName: text("full_name"),
	phone: varchar("phone", { length: 256 }),
});

export const usersRelations = relations(users, ({many}) => ({
	posts: many(posts)
}))
