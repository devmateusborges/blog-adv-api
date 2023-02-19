/*
  Warnings:

  - You are about to drop the column `sigla_group` on the `group` table. All the data in the column will be lost.
  - Added the required column `name_group` to the `group` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "group_sigla_group_key";

-- DropIndex
DROP INDEX "post_title_key";

-- AlterTable
ALTER TABLE "group" DROP COLUMN "sigla_group",
ADD COLUMN     "name_group" TEXT NOT NULL;
