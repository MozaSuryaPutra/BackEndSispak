const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetPenyakit = (req, res, next) => {
  next();
};

exports.validateGetPenyakitById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);

  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateCreatePenyakit = (req, res, next) => {
  console.log(req.body);

  const validateBody = z.object({
    nama: z.string(),
    deskripsi: z.string(),
    solusi: z.string().optional().nullable(),
  });

  // Validate
  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  // Convert to car data format
  req.body = {
    ...req.body,
  };

  next();
};

exports.validateUpdatePenyakit = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  validateParams.safeParse(req.params);
  const resultValidateParams = validateParams.safeParse(req.params);

  if (!resultValidateParams.success) {
    // If validation fails, return error messages
    throw new BadRequestError(resultValidateParams.error.errors);
  }

  const validateBody = z.object({
    nama: z.string().optional().nullable(),
    deskripsi: z.string().optional().nullable(),
    solusi: z.string().optional().nullable(),
  });

  //Validasi
  const resultValidateBody = validateBody.safeParse(req.body);
  if (!resultValidateBody.success) {
    throw new BadRequestError(resultValidateBody.error.errors);
  }

  // Convert to car data format
  req.body = {
    ...req.body,
  };

  next();
};

exports.validateDeletePenyaktitById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);
  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};
