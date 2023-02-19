/*
  Warnings:

  - You are about to drop the column `Color_Hex` on the `group` table. All the data in the column will be lost.
  - Added the required column `color_hex` to the `group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "group" DROP COLUMN "Color_Hex",
ADD COLUMN     "color_hex" TEXT NOT NULL;
