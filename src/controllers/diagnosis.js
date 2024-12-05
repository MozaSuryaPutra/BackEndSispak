const diagnosisService = require("../services/diagnosis");

exports.createDiagnosis = async (req, res) => {
  try {
    const { id_user, gejala } = req.body;

    // Hitung diagnosis
    const { penyakit_id, hasilcf } = await diagnosisService.calculateDiagnosis(
      id_user,
      gejala
    );

    // Simpan diagnosis ke database
    const newDiagnosis = await diagnosisService.saveDiagnosis(
      id_user,
      penyakit_id,
      hasilcf
    );

    return res.status(201).json({
      success: true,
      message: "Diagnosis berhasil dibuat.",
      data: newDiagnosis,
    });
  } catch (error) {
    console.error("Error creating diagnosis:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message || "Terjadi kesalahan pada server.",
    });
  }
};
