/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserEvents" DROP CONSTRAINT "UserEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserEvents" DROP CONSTRAINT "UserEvents_userId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserEvents";

-- CreateTable
CREATE TABLE "UserRegistration" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "howDidYouHearAboutEvent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_email_key" ON "UserRegistration"("email");

-- AddForeignKey
ALTER TABLE "UserRegistration" ADD CONSTRAINT "UserRegistration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
