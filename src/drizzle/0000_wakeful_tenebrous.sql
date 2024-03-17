CREATE TABLE IF NOT EXISTS "dates" (
	"date" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "dates_date_name_pk" PRIMARY KEY("date","name")
);
