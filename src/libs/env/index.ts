const FAKE_EMAIL = import.meta.env.VITE_FAKE_EMAIL;
const FAKE_PASSWORD = import.meta.env.VITE_FAKE_PASSWORD;
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const env = {
	fakeEmail: FAKE_EMAIL,
	fakePassword: FAKE_PASSWORD,
	postCodeBaseApiUrl: BASE_API_URL,
};
