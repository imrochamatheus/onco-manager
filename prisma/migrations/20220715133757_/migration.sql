/*
  Warnings:

  - A unique constraint covering the columns `[seat_number]` on the table `seat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "seat_seat_number_key" ON "seat"("seat_number");
