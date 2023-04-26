/*
  Warnings:

  - You are about to drop the column `color_hex` on the `group` table. All the data in the column will be lost.
  - Added the required column `color` to the `group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "group" DROP COLUMN "color_hex",
ADD COLUMN     "color" TEXT NOT NULL;
