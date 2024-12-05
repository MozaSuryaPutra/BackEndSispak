const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.getGejala = async (manufacturer) => {
  // Construct the where clause
  const query = {};

  // Find by query
  const searchedGejala = await prisma.gejala.findMany({
    where: query,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedGejala = JSONBigInt.stringify(searchedGejala);
  return JSONBigInt.parse(serializedGejala);
};

exports.getGejalaById = async (id) => {
  const gejalaById = await prisma.gejala.findFirst({
    where: {
      id: id,
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedGejala = JSONBigInt.stringify(gejalaById);
  return JSONBigInt.parse(serializedGejala);
};

exports.createGejala = async (data) => {
  const newGejala = await prisma.gejala.create({
    data: {
      ...data,
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedGejala = JSONBigInt.stringify(newGejala);
  return JSONBigInt.parse(serializedGejala);
};

exports.updateGejala = async (id, data) => {
  const updatedGejala = await prisma.gejala.update({
    where: { id },
    data,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedGejala = JSONBigInt.stringify(updatedGejala);
  return JSONBigInt.parse(serializedGejala);
};

exports.deleteGejala = async (id) => {
  const deletedGejala = await prisma.gejala.delete({
    where: { id },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedGejala = JSONBigInt.stringify(deletedGejala);
  return JSONBigInt.parse(serializedGejala);
};
