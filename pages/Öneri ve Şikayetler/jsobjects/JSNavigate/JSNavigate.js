export default {
	checkAdmin() {
		if (appsmith.store.userRole !== "admin") {
			navigateTo("Yetkili Giriş");
		}
	}
}
