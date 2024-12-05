const express = require("express");
const { validateDiagnosisInput } = require("../middlewares/diagnosis.js");
const { createDiagnosis } = require("../controllers/diagnosis.js");
const { authorization } = require("../middlewares/auth.js");
const router = express.Router();

// It will be run the URL based on path and the method
router
  .route("/")
  .post(authorization(1), validateDiagnosisInput, createDiagnosis);

module.exports = router;
