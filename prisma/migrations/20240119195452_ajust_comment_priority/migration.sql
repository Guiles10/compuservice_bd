/*
  Warnings:

  - You are about to drop the column `status` on the `comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "status",
ADD COLUMN     "priority" TEXT;
