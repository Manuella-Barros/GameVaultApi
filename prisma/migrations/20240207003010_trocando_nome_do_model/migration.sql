/*
  Warnings:

  - You are about to drop the `UserDto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserDto";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "favGenre1" TEXT NOT NULL,
    "favGenre2" TEXT NOT NULL,
    "favGame" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
