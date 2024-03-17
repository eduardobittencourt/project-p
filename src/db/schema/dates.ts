import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const dates = sqliteTable("dates", {
  date: text("date").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});
