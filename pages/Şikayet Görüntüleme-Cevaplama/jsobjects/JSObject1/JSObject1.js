export default {
  capitalizeName: (ad, soyad) => {
    const properAd = ad.replace(/\b\w/g, x => x.toUpperCase());
    const properSoyad = soyad.replace(/\b\w/g, x => x.toUpperCase());
    return "Sayın " + properAd + " " + properSoyad;
  }
}
