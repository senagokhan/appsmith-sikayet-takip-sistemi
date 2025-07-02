export default {
	async girisYap() {
		const email = InputMail.text?.trim();
		const sifre = InputSifre.text?.trim();

		if (!email || !sifre) {
			showAlert("Lütfen e-posta ve şifre giriniz.", "warning");
			return;
		}

		try {
			const sonuc = await kontrolKullanici.run();

			if (sonuc.length > 0) {
				const kullanici = sonuc[0];

				if (kullanici.rol === "personel") {
					storeValue("userRole", "personel");
					storeValue("userBirim", kullanici.birim);
					storeValue("aktifPersonel", kullanici); 
					navigateTo("Şikayet Görüntüleme-Cevaplama");
				}
				else if (kullanici.rol === "admin") {
					storeValue("userRole", "admin");
					storeValue("isAdmin", true);
					navigateTo("Öneri ve Şikayetler");
				}

			} else {
				showAlert("Hatalı giriş bilgileri!", "error");
			}

		} catch (err) {
			showAlert("Hata oluştu ❌: " + err.message, "error");
		}
	}
}


