const penyakitGejalaRepository = require("../repositories/penyakitGejala.js");
const { NotFoundError, InternalServerError } = require("../utils/request.js");
const { imageUpload } = require("../utils/image-kit.js");

exports.getPenyakitGejala = async () => {
  const dataPenyakitGejala = await penyakitGejalaRepository.getPenyakitGejala();
  if (dataPenyakitGejala.length < 1) {
    throw new NotFoundError("Penyakit Gejala Is Not Found");
  }
  return dataPenyakitGejala;
};

exports.getPenyakitGejalaById = async (id) => {
  const penyakitGejalaById =
    await penyakitGejalaRepository.getPenyakitGejalaById(id);
  if (!penyakitGejalaById) {
    throw new NotFoundError("Penyakit Gejala is not found");
  }
  return penyakitGejalaById;
};

exports.createPenyakitGejala = async (data, file) => {
  return penyakitGejalaRepository.createPenyakitGejala(data);
};

exports.updatePenyakitGejala = async (id, data) => {
  // find Penyakit Gejala is exist or not (validate the data)
  const existingPenyakitGejala =
    penyakitGejalaRepository.getPenyakitGejalaById(id);
  if (!existingPenyakitGejala) {
    throw new NotFoundError("Penyakit Gejala is Not Found!");
  }

  // replicated existing data with new data
  data = {
    ...existingPenyakitGejala,
    ...data,
  };

  const updatedPenyakitGejala = penyakitGejalaRepository.updatePenyakitGejala(
    id,
    data
  );
  if (!updatedPenyakitGejala) {
    throw new InternalServerError(["Failed to Penyakit Gejala!"]);
  }

  return updatedPenyakitGejala;
};

exports.deletePenyakitGejalaById = async (id) => {
  const penyakitGejalaExist =
    await penyakitGejalaRepository.getPenyakitGejalaById(id);
  if (!penyakitGejalaExist) {
    throw new NotFoundError("Penyakit Gejala is not found");
  }
  const deletedPenyakitGejala =
    await penyakitGejalaRepository.deletePenyakitGejalaById(id);
  if (!deletedPenyakitGejala) {
    throw new InternalServerError("Failed to delete Penyakit Gejala");
  }
  return deletedPenyakitGejala;
};
