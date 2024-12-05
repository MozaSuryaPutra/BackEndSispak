const express = require("express");
const {
  validateGetPenyakit,
  validateGetPenyakitById,
  validateCreatePenyakit,
  validateUpdatePenyakit,
  validateDeletePenyaktitById,
} = require("../middlewares/penyakit.js");
const {
  getPenyakit,
  createPenyakit,
  updatePenyakit,
  deletePenyakitById,
} = require("../controllers/penyakit.js");
const { getPenyakitById } = require("../controllers/penyakit.js");
const { authorization } = require("../middlewares/auth.js");
const router = express.Router();

// It will be run the URL based on path and the method
router
  .route("/")
  .get(authorization(1, 2), validateGetPenyakit, getPenyakit)
  .post(authorization(1), validateCreatePenyakit, createPenyakit);

router
  .route("/:id")
  .get(authorization(1, 2), validateGetPenyakitById, getPenyakitById)
  .put(authorization(1), validateUpdatePenyakit, updatePenyakit)
  .delete(authorization(1), validateDeletePenyaktitById, deletePenyakitById);

module.exports = router;
