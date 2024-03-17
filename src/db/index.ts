import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as dates from "@/db/schema/dates";

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const db = drizzle(client, {
  schema: {
    ...dates,
  },
});

export default db;
