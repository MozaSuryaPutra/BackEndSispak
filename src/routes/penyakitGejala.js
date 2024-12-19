const express = require("express");
const {
  validateGetPenyakitGejala,
  validateGetPenyakiGejalaById,
  validateCreatePenyakitGejala,
  validateUpdatePenyakitGejala,
  validateDeletePenyakitGejala,
  validateGetCarsSearched,
} = require("../middlewares/penyakitGejala.js");
const {
  getPenyakitGejala,
  createPenyakitGejala,
  updatePenyakitGejala,
  deletePenyakitGejalaById,
  getCarsSearched,
} = require("../controllers/penyakitGejala.js");
const { getPenyakitGejalaById } = require("../controllers/penyakitGejala.js");
const { authorization } = require("../middlewares/auth.js");
const router = express.Router();

router.get(
  "/",
  authorization(1, 2),
  validateGetPenyakitGejala,
  getPenyakitGejala
);

router.get(
  "/:id",
  authorization(1, 2),
  validateGetPenyakiGejalaById,
  getPenyakitGejalaById
);
router.post(
  "/",
  authorization(1),
  validateCreatePenyakitGejala,
  createPenyakitGejala
);
router.put(
  "/:id",
  authorization(1),
  validateUpdatePenyakitGejala,
  updatePenyakitGejala
);
router.delete(
  "/:id",
  authorization(1),
  validateDeletePenyakitGejala,
  deletePenyakitGejalaById
);
module.exports = router;
