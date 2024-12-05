const express = require("express");
const penyakitGejalaRouter = require("./penyakitGejala.js");
const penyakitRouter = require("./penyakit.js");
const gejalaRouter = require("./gejala.js");
const authRouter = require("./auth.js");
const diagnosisRouter = require("./diagnosis.js");
const router = express.Router();

router.use("/gejalaPenyakit", penyakitGejalaRouter);
router.use("/penyakit", penyakitRouter);
router.use("/gejala", gejalaRouter);
router.use("/auth", authRouter);
router.use("/diagnosis", diagnosisRouter);
module.exports = router;
