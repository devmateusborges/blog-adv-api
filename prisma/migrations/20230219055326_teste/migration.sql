/*
  Warnings:

  - You are about to drop the `user_post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_post" DROP CONSTRAINT "user_post_postId_fkey";

-- DropForeignKey
ALTER TABLE "user_post" DROP CONSTRAINT "user_post_userId_fkey";

-- DropTable
DROP TABLE "user_post";
