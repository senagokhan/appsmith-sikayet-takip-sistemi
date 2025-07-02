export default {
  kontrolRaporErisimi() {
    if (!(appsmith.store.userRole === "admin" || appsmith.store.userRole === "personel")) {
      navigateTo("Yetkili Giriş");
    }
  }
}
