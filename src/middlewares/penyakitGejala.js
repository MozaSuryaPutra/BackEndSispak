const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetPenyakitGejala = (req, res, next) => {
  next();
};

exports.validateGetPenyakiGejalaById = (req, res, next) => {
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

exports.validateCreatePenyakitGejala = (req, res, next) => {
  console.log(req.body);

  const validateBody = z.object({
    penyakit_id: z
      .string()
      .trim()
      .transform((val) => parseInt(val, 10))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "penyakit_id must be a positive integer",
      }),
    gejala_id: z
      .string()
      .trim()
      .transform((val) => parseInt(val, 10))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "gejala_id must be a positive integer",
      }),
    cf: z
      .string()
      .trim()
      .transform((val) => parseFloat(val))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "cf must be a positive Number",
      }),
  });

  // Validate
  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateUpdatePenyakitGejala = (req, res, next) => {
  const validateSchema = z.object({
    id: z.string(),
  });

  validateSchema.safeParse(req.params);
  const result = validateSchema.safeParse(req.params);

  if (!result.success) {
    // If validation fails, return error messages
    throw new BadRequestError(result.error.errors);
  }

  const validateBody = z.object({
    penyakit_id: z
      .string()
      .trim()
      .transform((val) => parseInt(val, 10))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "penyakit_id must be a positive integer",
      })
      .optional(),
    gejala_id: z
      .string()
      .trim()
      .transform((val) => parseInt(val, 10))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "gejala_id must be a positive integer",
      })
      .optional(),
    cf: z
      .string()
      .trim()
      .transform((val) => parseFloat(val))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "cf must be a positive Number",
      })
      .optional(),
  });

  //Validasi
  const result2 = validateBody.safeParse(req.body);
  if (!result2.success) {
    throw new BadRequestError(result2.error.errors);
  }

  next();
};

exports.validateDeletePenyakitGejala = (req, res, next) => {
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

exports.validateGetCarsSearched = (req, res, next) => {
  const carValidationSchema = z.object({
    capacity: z
      .string()
      .transform((val) => parseInt(val, 10))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "Capacity must be a positive number",
      }),
    availableAt: z.string().refine(
      (date) => {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        return datePattern.test(date) && !isNaN(Date.parse(date));
      },
      {
        message: "Available date must be in the format YYYY-MM-DD",
      }
    ),
  });

  const parsed = carValidationSchema.safeParse(req.query);

  if (!parsed.success) {
    throw new BadRequestError(parsed.error.errors);
  }

  next();
};
