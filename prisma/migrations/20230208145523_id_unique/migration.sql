/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `group` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `post_group` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "group_id_key" ON "group"("id");

-- CreateIndex
CREATE UNIQUE INDEX "post_group_id_key" ON "post_group"("id");
