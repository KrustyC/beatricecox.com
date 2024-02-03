-- CreateTable
CREATE TABLE "Project" (
    "contentfulId" TEXT NOT NULL,
    "successorId" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("contentfulId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_successorId_key" ON "Project"("successorId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "Project"("contentfulId") ON DELETE SET NULL ON UPDATE CASCADE;
