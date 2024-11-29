/*
  Warnings:

  - Changed the type of `role` on the `Message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Assistant', 'User');

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "techStack" JSONB,
ADD COLUMN     "techStackSetup" JSONB;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;
