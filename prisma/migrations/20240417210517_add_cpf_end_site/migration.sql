/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - Made the column `comment` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `comments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "client" ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "site" TEXT,
ALTER COLUMN "codigo" DROP NOT NULL,
ALTER COLUMN "cnpj" DROP NOT NULL;

-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "comment" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "client_cpf_key" ON "client"("cpf");
