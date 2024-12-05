const penyakitService = require("../services/penyakit");
const { successResponse } = require("../utils/response");

exports.getPenyakit = async (req, res, next) => {
  const data = await penyakitService.getPenyakit();

  successResponse(res, data);
};

exports.getPenyakitById = async (req, res, next) => {
  const { id } = req.params;
  const data = await penyakitService.getPenyakitById(id);

  successResponse(res, data, "Successfully get Penyakit data");
};

exports.createPenyakit = async (req, res, next) => {
  const data = await penyakitService.createPenyakit(req.body);

  successResponse(res, data);
};

exports.updatePenyakit = async (req, res, next) => {
  const { id } = req.params;
  const updatedPenyakit = await penyakitService.updatePenyakit(id, req.body);

  successResponse(res, updatedPenyakit, "Successfully update Penyakit");
};

exports.deletePenyakitById = async (req, res, next) => {
  const { id } = req.params;
  const deletedPenyakit = await penyakitService.deletePenyakitById(id);
  successResponse(res, deletedPenyakit, "Successfully delete car-type data");
};
