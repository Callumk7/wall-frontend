import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	body: text('body'),
	authorId: integer('user_id').references(() => users.id)
})

export const postsRelations = relations(posts, ({one}) => ({
	author: one(users, {
		fields: [posts.authorId],
		references: [users.id]
	})
}))
