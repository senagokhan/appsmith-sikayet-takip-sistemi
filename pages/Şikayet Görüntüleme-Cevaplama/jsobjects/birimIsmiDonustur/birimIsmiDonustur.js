export default {
  cevir(slug) {
    const map = {
      yazilim: "Yazılım Hizmetleri Şube Müdürlüğü",
      sistem: "Sistem Hizmetleri Şube Müdürlüğü",
      donanim_teknik: "Donanım ve Teknik Hizmetler Şube Müdürlüğü",
      idari: "İdari Hizmetler Şube Müdürlüğü",
      ag_hizmetleri: "Ağ Hizmetleri Şube Müdürlüğü",
      genel: "Genel"
    };
    return map[slug] || slug;
  }
}
