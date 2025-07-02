export default {
  checkPersonelGiris() {
    if (!appsmith.store.aktifPersonel) {
      navigateTo("Yetkili Giriş");
    }
  }
}
