const FAKE_EMAIL = import.meta.env.VITE_FAKE_EMAIL;
const FAKE_PASSWORD = import.meta.env.VITE_FAKE_PASSWORD;
const FAKE_APIKEY = 'this is an apikey';

export const fakeApiLogin = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const fakeRequest = new Promise<{ apikey: string }>((resolve, reject) => {
		setTimeout(() => {
			if (email === FAKE_EMAIL && password === FAKE_PASSWORD) {
				resolve({ apikey: FAKE_APIKEY });
			} else {
				reject(new Error('email or password incorrect!'));
			}
		}, 1000);
	});
	return fakeRequest;
};
