export default {
  sikayetVeCevapSil(row) {
    silCevaplar.run({ sikayet_id: row.sikayet_id })
      .then(() => silSikayet.run({ sikayet_id: row.sikayet_id }))
      .then(() => {
        getKisilerVeSikayetler.run();
        showAlert("Şikayet başarıyla silindi ✅", "success");
      })
      .catch((err) => {
        showAlert("Silme işlemi sırasında hata oluştu ❌: " + err.message, "error");
      });
  }
}





