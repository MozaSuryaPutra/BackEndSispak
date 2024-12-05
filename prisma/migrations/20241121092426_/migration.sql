-- CreateTable
CREATE TABLE "diagnosis" (
    "id" BIGSERIAL NOT NULL,
    "hasilcf" DOUBLE PRECISION,
    "penyakit_id" BIGINT,
    "id_user" BIGINT,

    CONSTRAINT "diagnosis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gejala" (
    "id" BIGSERIAL NOT NULL,
    "nama" VARCHAR,

    CONSTRAINT "gejala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penyakit" (
    "id" BIGSERIAL NOT NULL,
    "nama" VARCHAR,
    "deskripsi" TEXT,
    "solusi" TEXT,

    CONSTRAINT "penyakit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penyakitgejala" (
    "id" BIGSERIAL NOT NULL,
    "cf" DOUBLE PRECISION,
    "penyakit_id" BIGINT,
    "gejala_id" BIGINT,

    CONSTRAINT "penyakitgejala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" BIGSERIAL NOT NULL,
    "nama" VARCHAR,
    "email" VARCHAR,
    "password" VARCHAR,
    "profile_picture" VARCHAR,
    "role_id" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "diagnosis" ADD CONSTRAINT "diagnosis_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "diagnosis" ADD CONSTRAINT "diagnosis_penyakit_id_fkey" FOREIGN KEY ("penyakit_id") REFERENCES "penyakit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "penyakitgejala" ADD CONSTRAINT "penyakitgejala_gejala_id_fkey" FOREIGN KEY ("gejala_id") REFERENCES "gejala"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "penyakitgejala" ADD CONSTRAINT "penyakitgejala_penyakit_id_fkey" FOREIGN KEY ("penyakit_id") REFERENCES "penyakit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
