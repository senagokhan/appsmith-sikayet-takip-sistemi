export default {
  formatTarih(isoTarih) {
    const [yil, ay] = isoTarih.split("-");
    const date = new Date(yil, ay - 1);
    return date.toLocaleDateString("tr-TR", { month: "long", year: "numeric" });
  },

  data() {
    return getAyBazliSikayet.data.map(item => ({
      x: this.formatTarih(item.name),   
      y: Number(item.value)
    }));
  }
}
