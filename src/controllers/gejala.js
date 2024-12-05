const gejalaService = require("../services/gejala");
const { successResponse } = require("../utils/response");

exports.getGejala = async (req, res, next) => {
  const data = await gejalaService.getGejala(req.query?.manufacturer);

  successResponse(res, data);
};

exports.getGejalaById = async (req, res, next) => {
  // Get the id from params
  const { id } = req.params;

  // Get student by id
  const data = await gejalaService.getGejalaById(id);
  successResponse(res, data);
};

exports.createGejala = async (req, res, next) => {
  const data = await gejalaService.createGejala(req.body);

  successResponse(res, data);
};

exports.updateGejala = async (req, res, next) => {
  const { id } = req.params;
  const data = await gejalaService.updateGejala(id, req.body);
  successResponse(res, data);
};

exports.deleteGejala = async (req, res, next) => {
  const { id } = req.params;
  const data = await gejalaService.deleteGejala(id);
  successResponse(res, data);
};
