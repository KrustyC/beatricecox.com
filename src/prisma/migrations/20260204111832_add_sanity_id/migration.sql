/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contentfulId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `sanityId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_successorId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "contentfulId",
ADD COLUMN     "sanityId" TEXT NOT NULL,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("sanityId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_successorId_fkey" FOREIGN KEY ("successorId") REFERENCES "Project"("sanityId") ON DELETE SET NULL ON UPDATE CASCADE;
