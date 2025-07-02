export default {
  durumEtiketleri: {
    yeni: "Yeni",
    cevaplandı: "Geri Dönüş Yapıldı"
  },

  data() {
    return getDurumaGoreSikayet.data.map(item => ({
      x: this.durumEtiketleri[item.name.toLowerCase()] || item.name,
      y: Number(item.value)
    }));
  }
}

