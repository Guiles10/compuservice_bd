/*
  Warnings:

  - A unique constraint covering the columns `[filename]` on the table `file` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "file_filename_key" ON "file"("filename");
