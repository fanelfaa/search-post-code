const FAKE_EMAIL = import.meta.env.VITE_FAKE_EMAIL;
const FAKE_PASSWORD = import.meta.env.VITE_FAKE_PASSWORD;
const RAJA_ONGKIR_APIKEY = import.meta.env.VITE_RAJA_ONGKIR_APIKEY;

export const env = {
	fakeEmail: FAKE_EMAIL,
	fakePassword: FAKE_PASSWORD,
	rajaOngkirApikey: RAJA_ONGKIR_APIKEY,
};
