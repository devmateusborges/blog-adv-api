/*
  Warnings:

  - Added the required column `table_name` to the `logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "logs" ADD COLUMN     "table_name" TEXT NOT NULL;
