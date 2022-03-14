/*
  Warnings:

  - Added the required column `rouletteId` to the `RouletteBet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RouletteBet" ADD COLUMN     "rouletteId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "RouletteBet" ADD CONSTRAINT "RouletteBet_rouletteId_fkey" FOREIGN KEY ("rouletteId") REFERENCES "Roulette"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
