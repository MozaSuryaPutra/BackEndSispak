const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");
const userRepository = require("./users");
const prisma = new PrismaClient();
exports.getDiagnosis = async (id_user) => {
  const user = await userRepository.getUserById(id_user);
  const allRelatedDiagnosis = await prisma.diagnosis.findMany({
    where: {
      id_user: user.id,
    },
    include: {
      penyakit: true,
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedDiagnosis = JSONBigInt.stringify(allRelatedDiagnosis);
  return JSONBigInt.parse(serializedDiagnosis);
};

exports.getDiagnosisById = async (id) => {
  const diagnosisFind = await prisma.diagnosis.findFirst({
    where: {
      id: id,
    },
    include: {
      penyakit: true,
    },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedDiagnosis = JSONBigInt.stringify(diagnosisFind);
  return JSONBigInt.parse(serializedDiagnosis);
};

exports.getPenyakitGejalaByGejalaIds = async (gejalaIds) => {
  const getGejala = await prisma.penyakitgejala.findMany({
    where: {
      gejala_id: { in: gejalaIds },
    },
    include: {
      penyakit: true,
    },
  });

  const serializedDiagnosis = JSONBigInt.stringify(getGejala);
  return JSONBigInt.parse(serializedDiagnosis);
};

exports.createDiagnosis = async (data) => {
  const createDiagnosisPatient = await prisma.diagnosis.create({ data });
  const serializedDiagnosis = JSONBigInt.stringify(createDiagnosisPatient);
  return JSONBigInt.parse(serializedDiagnosis);
};
