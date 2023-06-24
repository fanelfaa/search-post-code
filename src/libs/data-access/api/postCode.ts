import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';
import { env } from '@/libs/env';

export const postCodeInstance = createAlova({
	baseURL: env.postCodeBaseApiUrl,
	statesHook: ReactHook,
	requestAdapter: GlobalFetch(),
	responded: async (res) => {
		return res.json();
	},
});
