/*
  Warnings:

  - You are about to drop the column `descriptin` on the `suport_card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "suport_card" DROP COLUMN "descriptin",
ADD COLUMN     "description" TEXT;
