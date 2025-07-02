export default {
  personelKayit: async () => {
    try {
      await InsertKullanici.run();

      showAlert("Kayıt başarılı 🎉", "success");
      resetWidget("InputAd");
      resetWidget("InputSoyad");
      resetWidget("InputEmail");
      resetWidget("InputSifre");
      resetWidget("SelectBirim");
      navigateTo("GirisSayfasi");

    } catch (err) {
      showAlert("Hata oluştu ❌: " + err.message, "error");
    }
  }
}
