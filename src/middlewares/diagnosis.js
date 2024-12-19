exports.validateDiagnosisInput = (req, res, next) => {
  const { id_user, gejala } = req.body;

  console.log(req.body);
  if (!id_user || !Array.isArray(gejala) || gejala.length < 3) {
    return res.status(400).json({
      success: false,
      message:
        "Data tidak valid: id_user harus ada dan gejala harus berupa array. Atau anda minimal harus input 3 gejala",
    });
  }

  next();
};
