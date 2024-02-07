/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `UserDto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `UserDto` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "UserDto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "UserDto"("email");
