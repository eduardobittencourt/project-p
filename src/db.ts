import { sql } from "@vercel/postgres";
import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { createInsertSchema } from "drizzle-zod";

export const dates = pgTable(
  "dates",
  {
    date: text("date").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.date, table.name] }),
    };
  },
);

export const insertDateSchema = createInsertSchema(dates);

export const db = drizzle(sql, {
  schema: {
    dates,
  },
});
