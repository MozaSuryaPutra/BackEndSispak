const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();
exports.getPenyakitGejala = async () => {
  // Ambil semua mobil tanpa filter capacity
  const allPenyakitGejala = await prisma.penyakitgejala.findMany({
    include: {
      penyakit: true,
      gejala: true,
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakitGejala = JSONBigInt.stringify(allPenyakitGejala);
  return JSONBigInt.parse(serializedPenyakitGejala);
};

exports.getPenyakitGejalaById = async (id) => {
  const PenyakitGejalaFind = await prisma.penyakitgejala.findFirst({
    where: {
      id: id,
    },
    include: {
      penyakit: true,
      gejala: true,
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakitGejala = JSONBigInt.stringify(PenyakitGejalaFind);
  return JSONBigInt.parse(serializedPenyakitGejala);
};

exports.createPenyakitGejala = async (data) => {
  const newPenyakitGejala = await prisma.penyakitgejala.create({
    data: {
      ...data,
      cf: parseFloat(data.cf),
      penyakit_id: parseInt(data.penyakit_id),
      gejala_id: parseInt(data.gejala_id),
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakitGejala = JSONBigInt.stringify(newPenyakitGejala);
  return JSONBigInt.parse(serializedPenyakitGejala);
};

exports.updatePenyakitGejala = async (id, data) => {
  const updatedPenyakitGejala = await prisma.penyakitgejala.update({
    where: {
      id: id,
    },
    include: {
      penyakit: true,
      gejala: true,
    },
    data: {
      ...data,
      cf: parseFloat(data.cf),
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakitGejala = JSONBigInt.stringify(updatedPenyakitGejala);
  return JSONBigInt.parse(serializedPenyakitGejala);
};

exports.deletePenyakitGejalaById = async (id) => {
  const deletedPenyakitGejala = await prisma.penyakitgejala.delete({
    where: { id: id },
  });

  const serializedPenyakitGejala = JSONBigInt.stringify(deletedPenyakitGejala);
  return JSONBigInt.parse(serializedPenyakitGejala);
};
