/*
  Warnings:

  - You are about to drop the column `userId` on the `group` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `group` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "group" DROP CONSTRAINT "group_userId_fkey";

-- AlterTable
ALTER TABLE "group" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
