import { env } from '@/libs/env';

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
			if (email === env.fakeEmail && password === env.fakePassword) {
				resolve({ apikey: FAKE_APIKEY });
			} else {
				reject(new Error('email or password incorrect!'));
			}
		}, 1000);
	});
	return fakeRequest;
};
