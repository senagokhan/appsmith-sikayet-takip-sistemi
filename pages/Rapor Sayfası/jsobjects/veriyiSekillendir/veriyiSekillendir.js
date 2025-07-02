export default {
  birimAdlari: {
    ag_hizmetleri: "Ağ",
    yazilim: "Yazılım",
    donanim_teknik: "Donanım",
    idari: "İdari",
    sistem: "Sistem",
    genel: "Genel"
  },

  seriesData() {
    return getBirimSikayetSayisi.data.map(item => ({
      x: String(this.birimAdlari[item.name] || item.name),  
      y: Number(item.value)
    }));
  }
}


