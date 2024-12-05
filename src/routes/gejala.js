const express = require("express");
const {
  validateGetGejala,
  validateGetGejalaById,
  validateCreateGejala,
  validateUpdateGejala,
  validateDeleteGejala,
} = require("../middlewares/gejala");
const {
  getGejala,
  getGejalaById,
  createGejala,
  updateGejala,
  deleteGejala,
} = require("../controllers/gejala");
const { authorization } = require("../middlewares/auth");
const router = express.Router();

// Route is now just `/` because `/models` is handled by the parent route in index.js
router
  .route("/")
  .get(authorization(1, 2), validateGetGejala, getGejala)
  .post(authorization(1), validateCreateGejala, createGejala);

router
  .route("/:id")
  .get(authorization(1, 2), validateGetGejalaById, getGejalaById)
  .put(authorization(1), validateUpdateGejala, updateGejala)
  .delete(authorization(1), validateDeleteGejala, deleteGejala);
module.exports = router;
