const penyakitGejalaService = require("../services/penyakitGejala");
const { successResponse } = require("../utils/response");
const CarsRepository = require("../repositories/penyakitGejala");

exports.getPenyakitGejala = async (req, res, next) => {
  const data = await penyakitGejalaService.getPenyakitGejala();
  successResponse(res, data);
};

exports.getPenyakitGejalaById = async (req, res, next) => {
  const { id } = req.params;
  const data = await penyakitGejalaService.getPenyakitGejalaById(id);
  successResponse(res, data, "Get Penyakit Gejala By Id is Success");
};

exports.createPenyakitGejala = async (req, res, next) => {
  try {
    const requestBody = {
      ...req.body,
    };

    const existingData = await penyakitGejalaService.getPenyakitGejala();
    console.log(existingData);
    const isDuplicate = existingData.some(
      (item) =>
        Number(item.penyakit_id) === Number(requestBody.penyakit_id) &&
        Number(item.gejala_id) === Number(requestBody.gejala_id)
    );

    if (isDuplicate) {
      return res.status(400).json({
        success: false,
        message: "Data dengan kombinasi penyakit_id dan gejala_id sudah ada.",
      });
    }

    const data = await penyakitGejalaService.createPenyakitGejala(requestBody);

    successResponse(res, data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
};

exports.updatePenyakitGejala = async (req, res, next) => {
  const { id } = req.params;
  const PenyakitGejala = penyakitGejalaService.getPenyakitGejalaById(id);
  if (!PenyakitGejala) {
    throw new NotFoundError("Penyakit Gejala is not found");
  }
  const requestBody = {
    ...req.body,
  };
  const updateThePenyakitGejala =
    await penyakitGejalaService.updatePenyakitGejala(id, requestBody);
  successResponse(
    res,
    updateThePenyakitGejala,
    "Update PenyakitGejala is Success"
  );
};

exports.deletePenyakitGejalaById = async (req, res, next) => {
  const { id } = req.params;
  const deleteThePenyakitGejala =
    await penyakitGejalaService.deletePenyakitGejalaById(id);
  successResponse(res, deleteThePenyakitGejala, "Delete Penyakit is Success");
};
