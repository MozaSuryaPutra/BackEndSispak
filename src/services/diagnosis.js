const diagnosisRepository = require("../repositories/diagnosis.js");
exports.calculateDiagnosis = async (id_user, gejala) => {
  // Ambil data penyakit-gejala berdasarkan gejala_id
  const penyakitGejala = await diagnosisRepository.getPenyakitGejalaByGejalaIds(
    gejala.map((g) => g.gejala_id)
  );

  if (!penyakitGejala.length) {
    throw new Error("Tidak ada data penyakit-gejala yang cocok.");
  }

  // Hitung CF untuk setiap penyakit
  const cfPenyakit = {};
  penyakitGejala.forEach((pg) => {
    const gejalaUser = gejala.find((g) => g.gejala_id === pg.gejala_id);
    const cfCombine = pg.cf * (gejalaUser?.cf_user || 0);

    if (cfPenyakit[pg.penyakit_id]) {
      const cf1 = cfPenyakit[pg.penyakit_id];
      cfPenyakit[pg.penyakit_id] = cf1 + cfCombine * (1 - cf1);
    } else {
      cfPenyakit[pg.penyakit_id] = cfCombine;
    }
  });

  // Cari penyakit dengan CF tertinggi
  const penyakitTertinggi = Object.keys(cfPenyakit).reduce((a, b) =>
    cfPenyakit[a] > cfPenyakit[b] ? a : b
  );

  return {
    penyakit_id: parseInt(penyakitTertinggi),
    hasilcf: cfPenyakit[penyakitTertinggi],
  };
};

exports.saveDiagnosis = async (id_user, penyakit_id, hasilcf) => {
  return await diagnosisRepository.createDiagnosis({
    id_user,
    penyakit_id,
    hasilcf,
    tanggalwaktu: new Date(),
  });
};
