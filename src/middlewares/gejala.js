const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetGejala = (req, res, next) => {
  next();
};

exports.validateGetGejalaById = (req, res, next) => {
  // Make a validation schema
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

exports.validateCreateGejala = (req, res, next) => {
  const validateBody = z.object({
    nama: z.string(),
  });

  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    console.error("Validation errors:", result.error.errors);
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateUpdateGejala = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultValidateParams = validateParams.safeParse(req.params);
  if (!resultValidateParams.success) {
    // If validation fails, return error messages
    throw new BadRequestError(resultValidateParams.error.errors);
  }

  const validateBody = z.object({
    nama: z.string().optional().nullable(),
  });

  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    console.error("Validation errors:", result.error.errors);
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateDeleteGejala = (req, res, next) => {
  // Make a validation schema
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
