/*
  Warnings:

  - A unique constraint covering the columns `[name_group]` on the table `group` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "group_name_group_key" ON "group"("name_group");
