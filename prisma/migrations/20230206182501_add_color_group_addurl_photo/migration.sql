/*
  Warnings:

  - Added the required column `Color_Hex` to the `group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_photo` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "group" ADD COLUMN     "Color_Hex" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "post" ADD COLUMN     "url_photo" TEXT NOT NULL;
