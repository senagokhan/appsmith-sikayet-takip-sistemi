export default {
  kullaniciTipleri: {
    ogrenci: "Öğrenci",
    akademik_personel: "Akademik Personel",
    idari_personel: "İdari Personel",
		dis_paydas: "Dış Paydaş"
  },

  kullaniciData() {
    return getKullaniciTipineGore.data.map(item => ({
      name: this.kullaniciTipleri[item.name] || item.name,
      value: item.value
    }));
  }
}
