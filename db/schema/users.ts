import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { posts } from "./posts";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	fullName: text("full_name"),
	email: text("email"),
	password: text("password"),
	username: text("username"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
