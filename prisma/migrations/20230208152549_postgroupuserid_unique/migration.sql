/*
  Warnings:

  - A unique constraint covering the columns `[groupId]` on the table `post_group` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `post_group` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "post_group_groupId_key" ON "post_group"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "post_group_postId_key" ON "post_group"("postId");
