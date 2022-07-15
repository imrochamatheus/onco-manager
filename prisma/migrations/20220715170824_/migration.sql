/*
  Warnings:

  - A unique constraint covering the columns `[medical_records_number]` on the table `patient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "patient_medical_records_number_key" ON "patient"("medical_records_number");
