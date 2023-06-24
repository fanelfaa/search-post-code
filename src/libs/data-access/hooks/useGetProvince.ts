import { useRequest } from 'alova';
import { postCodeInstance } from '../api/postCode';
import { ProvinceResponse } from '@/libs/types/responses/PostCode';

export const useGetProvinces = () => {
	const { data } = useRequest(
		postCodeInstance.Get<ProvinceResponse | undefined>('/list_propinsi.json')
	);
	return {
		options: data
			? Object.keys(data).map((key) => ({ value: key, label: data[key] }))
			: undefined,
	};
};
