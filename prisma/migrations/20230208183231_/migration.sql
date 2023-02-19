/*
  Warnings:

  - You are about to drop the `post_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_user" DROP CONSTRAINT "post_user_postId_fkey";

-- DropForeignKey
ALTER TABLE "post_user" DROP CONSTRAINT "post_user_userId_fkey";

-- DropIndex
DROP INDEX "post_group_groupId_key";

-- DropIndex
DROP INDEX "post_group_postId_key";

-- DropTable
DROP TABLE "post_user";
