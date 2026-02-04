CREATE TABLE "Project" IF NOT EXISTS (
	"sanityId" text PRIMARY KEY NOT NULL,
	"successorId" text,
	CONSTRAINT "Project_successorId_unique" UNIQUE("successorId")
);
