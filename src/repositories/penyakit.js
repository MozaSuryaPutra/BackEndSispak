const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.getPenyakit = async () => {
  // Construct the where clause
  const query = {};

  // Find by query
  const searchedPenyakit = await prisma.penyakit.findMany({
    where: query,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakit = JSONBigInt.stringify(searchedPenyakit);
  return JSONBigInt.parse(serializedPenyakit);
};

exports.getPenyakitById = async (id) => {
  const Penyakit = await prisma.penyakit.findFirst({
    where: {
      id: id,
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakit = JSONBigInt.stringify(Penyakit);
  return JSONBigInt.parse(serializedPenyakit);
};

exports.createPenyakit = async (data) => {
  const newPenyakit = await prisma.penyakit.create({
    data: {
      ...data, // Spread semua data dari request body ke sini
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakit = JSONBigInt.stringify(newPenyakit);
  return JSONBigInt.parse(serializedPenyakit);
};

exports.UpdatePenyakit = async (id, data) => {
  const updatedPenyakit = await prisma.penyakit.update({
    where: { id },
    data,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedPenyakit = JSONBigInt.stringify(updatedPenyakit);
  return JSONBigInt.parse(serializedPenyakit);
};

exports.deletePenyakitById = async (id) => {
  const deletedPenyakit = await prisma.penyakit.delete({
    where: { id },
  });

  const serializedPenyakit = JSONBigInt.stringify(deletedPenyakit);
  return JSONBigInt.parse(serializedPenyakit);
};
