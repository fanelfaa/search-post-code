import { useRequest } from 'alova';
import { CityResponse } from '@/libs/types/responses/PostCode';
import { postCodeInstance } from '../api/postCode';

export const useGetCities = () => {
	const { data, send } = useRequest(
		(provinceId) =>
			postCodeInstance.Get<CityResponse | undefined>(
				`/list_kotakab/${provinceId}.json`
			),
		{
			immediate: false,
		}
	);
	return {
		options: data
			? Object.keys(data).map((key) => ({ value: key, label: data[key] }))
			: undefined,
		send,
	};
};
