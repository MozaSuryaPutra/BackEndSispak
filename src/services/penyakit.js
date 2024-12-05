const penyakitRepository = require("../repositories/penyakit.js");
const { NotFoundError, InternalServerError } = require("../utils/request.js");

exports.getPenyakit = async () => {
  const takePenyakit = await penyakitRepository.getPenyakit();

  if (takePenyakit.length < 1) {
    throw new NotFoundError("Penyakit Is Not Found");
  }

  return takePenyakit;
};

exports.getPenyakitById = async (id) => {
  const penyakitById = await penyakitRepository.getPenyakitById(id);

  if (!penyakitById) {
    throw new NotFoundError("Penyakit is not found");
  }

  return penyakitById;
};

exports.createPenyakit = async (data) => {
  // Create the data
  return penyakitRepository.createPenyakit(data);
};

exports.updatePenyakit = async (id, data, file) => {
  // find Car is exist or not (validate the data)
  const existingPenyakit = await penyakitRepository.getPenyakitById(id);

  if (!existingPenyakit) {
    throw new NotFoundError("Penyakit is Not Found!");
  }

  // replicated existing data with new data
  data = {
    ...existingPenyakit, // existing Car
    ...data,
  };

  // if exist, we will update the Car data
  const updatedPenyakit = penyakitRepository.UpdatePenyakit(id, data);
  if (!updatedPenyakit) {
    throw new InternalServerError(["Failed to update Car!"]);
  }

  return updatedPenyakit;
};

exports.deletePenyakitById = async (id) => {
  const existingPenyakit = await penyakitRepository.getPenyakitById(id);
  if (!existingPenyakit) {
    throw new NotFoundError("Penyakit is not found");
  }

  const deletedPenyakit = await penyakitRepository.deletePenyakitById(id);
  if (!deletedPenyakit) {
    throw new InternalServerError("Failed to delete Penyakit");
  }

  return deletedPenyakit;
};
