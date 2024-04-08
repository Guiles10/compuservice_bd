/*
  Warnings:

  - You are about to drop the column `filename` on the `file` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fileName]` on the table `file` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileName` to the `file` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "file_filename_key";

-- AlterTable
ALTER TABLE "file" DROP COLUMN "filename",
ADD COLUMN     "fileName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "file_fileName_key" ON "file"("fileName");
