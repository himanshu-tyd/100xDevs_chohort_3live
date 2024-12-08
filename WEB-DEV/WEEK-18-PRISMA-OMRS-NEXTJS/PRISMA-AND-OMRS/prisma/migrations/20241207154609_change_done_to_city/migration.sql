/*
  Warnings:

  - You are about to drop the column `done` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "done",
DROP COLUMN "userId",
ADD COLUMN     "city" TEXT NOT NULL;
