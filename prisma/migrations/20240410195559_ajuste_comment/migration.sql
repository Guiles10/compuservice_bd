/*
  Warnings:

  - Made the column `comment` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `comments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "comment" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

INSERT INTO CLIENT (DATA_CAD, NOME, RAZAO_SOCIAL, NOME1, FONE1, FONE2, CELULAR)
            VALUES ('2010-08-10', '030 - ASSOC HOSPITALAR BENEFICENTE AJURICABA',
            'ASSOC HOSPITALAR BENEFICENTE AJURICABA', 'AJURICABA', NULL, '5533871155', NULL);