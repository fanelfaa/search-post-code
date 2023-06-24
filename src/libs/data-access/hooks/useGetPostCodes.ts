import { useRequest } from 'alova';
import { PostCodesResponse } from '@/libs/types/responses/PostCode';
import { postCodeInstance } from '../api/postCode';

export const useGetPostCodes = () => {
	return useRequest(
		(cityId) =>
			postCodeInstance.Get<PostCodesResponse | undefined>(
				`/kota_kab/${cityId}.json`
			),
		{
			immediate: false,
		}
	);
};
