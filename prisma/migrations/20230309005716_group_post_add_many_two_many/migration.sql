/*
  Warnings:

  - You are about to drop the `post_group` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `group_id` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "post_group" DROP CONSTRAINT "post_group_groupId_fkey";

-- DropForeignKey
ALTER TABLE "post_group" DROP CONSTRAINT "post_group_postId_fkey";

-- AlterTable
ALTER TABLE "post" ADD COLUMN     "group_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "post_group";

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
