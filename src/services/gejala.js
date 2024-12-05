const gejalaRepository = require("../repositories/gejala.js");
const { NotFoundError, InternalServerError } = require("../utils/request.js");
exports.getGejala = async () => {
  return gejalaRepository.getGejala();
};

exports.getGejalaById = async (id) => {
  const gejalaById = await gejalaRepository.getGejalaById(id);
  if (!gejalaById) {
    throw new NotFoundError("Gejala is Not Found!");
  }

  return gejalaById;
};

exports.createGejala = async (data) => {
  return gejalaRepository.createGejala(data);
};

exports.updateGejala = async (id, data) => {
  const existingGejala = await gejalaRepository.getGejalaById(id);
  if (!existingGejala) {
    throw new NotFoundError("Gejala is Not Found!");
  }

  data = {
    ...existingGejala, // existing Gejala
    ...data,
  };

  // if exist, we will update the Gejala data
  const updatedGejala = await gejalaRepository.updateGejala(id, data);
  if (!updatedGejala) {
    throw new InternalServerError(["Failed to update Gejala!"]);
  }

  return updatedGejala;
};

exports.deleteGejala = async (id) => {
  // find student is exist or not (validate the data)
  const existingGejala = await gejalaRepository.getGejalaById(id);
  if (!existingGejala) {
    throw new NotFoundError("Gejala is Not Found!");
  }

  // if exist, we will delete the student data
  const deletedGejala = await gejalaRepository.deleteGejala(id);
  if (!deletedGejala) {
    throw new InternalServerError(["Failed to delete Car Model!"]);
  }

  return deletedGejala;
};
