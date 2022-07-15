-- CreateEnum
CREATE TYPE "Access" AS ENUM ('master', 'staff', 'operator');

-- CreateEnum
CREATE TYPE "Occupation" AS ENUM ('manager', 'secretary', 'nurse', 'nursing_technician');

-- CreateTable
CREATE TABLE "schedule" (
    "id" TEXT NOT NULL,
    "cicle_number" INTEGER NOT NULL,
    "id_protocol" BIGINT NOT NULL,
    "id_patient" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "medical_records_number" INTEGER NOT NULL,
    "contact" VARCHAR(255) NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professionals" (
    "id" TEXT NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "access_level" "Access" NOT NULL DEFAULT 'operator',
    "occupation" "Occupation" NOT NULL DEFAULT 'nurse',

    CONSTRAINT "professionals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seat" (
    "id" SMALLSERIAL NOT NULL,
    "seat_number" SMALLINT NOT NULL,

    CONSTRAINT "seat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_seat" (
    "id" TEXT NOT NULL,
    "id_seat" INTEGER NOT NULL,
    "id_patient" TEXT NOT NULL,
    "id_protocol" BIGINT NOT NULL,
    "checkin_timestamp" VARCHAR(50) NOT NULL,
    "checkout_timestamp" VARCHAR(50) NOT NULL,
    "checkin_professional" VARCHAR(255) NOT NULL,
    "checkout_professional" VARCHAR(255) NOT NULL,
    "notes" VARCHAR(255) NOT NULL,

    CONSTRAINT "register_seat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "protocol" (
    "id" BIGSERIAL NOT NULL,
    "volume" REAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "infusion_time" VARCHAR(255) NOT NULL,

    CONSTRAINT "protocol_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "schedule_id_protocol_key" ON "schedule"("id_protocol");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_id_patient_key" ON "schedule"("id_patient");

-- CreateIndex
CREATE UNIQUE INDEX "register_seat_id_seat_key" ON "register_seat"("id_seat");

-- CreateIndex
CREATE UNIQUE INDEX "register_seat_id_patient_key" ON "register_seat"("id_patient");

-- CreateIndex
CREATE UNIQUE INDEX "register_seat_id_protocol_key" ON "register_seat"("id_protocol");

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_id_patient_fkey" FOREIGN KEY ("id_patient") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_id_protocol_fkey" FOREIGN KEY ("id_protocol") REFERENCES "protocol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_seat" ADD CONSTRAINT "register_seat_id_patient_fkey" FOREIGN KEY ("id_patient") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_seat" ADD CONSTRAINT "register_seat_id_seat_fkey" FOREIGN KEY ("id_seat") REFERENCES "seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_seat" ADD CONSTRAINT "register_seat_id_protocol_fkey" FOREIGN KEY ("id_protocol") REFERENCES "protocol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
