/*
  Warnings:

  - You are about to drop the column `businessPhone` on the `client` table. All the data in the column will be lost.
  - Made the column `businessPhone_2` on table `client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessPhone_1` on table `client` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "client" DROP COLUMN "businessPhone",
ALTER COLUMN "businessPhone_2" SET NOT NULL,
ALTER COLUMN "businessPhone_1" SET NOT NULL;
